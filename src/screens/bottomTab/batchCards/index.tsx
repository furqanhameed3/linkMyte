import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, IMAGES, Ionicons, h} from '../../../constants';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Button from '../../../components/Button';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import styles from './styles';

NfcManager.start();
const BatchCards = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.employeeReducer);
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [cardsList, setCardsList] = useState();
  const [url, setUrl] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [jobTitle, setJobTitle] = useState();
  useEffect(() => {
    if (isFocused) {
      getUnlinkedCardsList();
    }
  }, [isFocused, token]);
  const getUnlinkedCardsList = async () => {
    try {
      const response: any = await axios.get('unlink-cards-listing', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCardsList(response?.data?.data?.data);
      console.log(
        'cards-listing Api Response()',
        JSON.stringify(response, null, 4),
      );
    } catch (error: any) {
      console.log('ERROR getAllPosts() API ', JSON.stringify(error, null, 4));
      return {
        error: true,
        message: `${error.message}`,
      };
    }
  };

  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };

  const handlePress = () => {
    readNdef();
    setModalVisible(false);
    // navigation.navigate('ReadNfc');
  };

  const cardsData = [
    {
      image: IMAGES.profileImg,
      name: 'First Name',
      card_link_status: 1,
      card_Num: 'ABC1243',
    },
    {
      image: IMAGES.profileImg,
      name: 'First Name',
      card_link_status: 0,
      card_Num: 'ABC1243',
    },
    {
      image: IMAGES.profileImg,
      name: 'First Name',
      card_link_status: 1,
      card_Num: 'ABC1243',
    },
    {
      image: IMAGES.profileImg,
      name: 'First Name',
      card_link_status: 1,
      card_Num: 'ABC1243',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Batch Cards</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Ionicons color="#7f7c7c" size={25} name="search-outline" />
        <TextInput
          placeholderTextColor={COLORS.gray}
          style={styles.txtInput}
          placeholder="Search"
        />
      </View>
      <View
        style={{
          borderBottomWidth: 0.8,
          paddingHorizontal: h('2%'),
          marginVertical: 15,
          borderBottomColor: COLORS.gray,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cardsList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setUrl(item?.short_code_url);
              setId(item?.id);
              setFirstName(item?.first_name);
              setJobTitle(item?.job_title);
            }}
            style={styles.cardWrapper}>
            <View style={styles.cardProfile}>
              <Image
                source={item?.image ? {uri: item.image} : IMAGES.profileImg}
                style={styles.cardImg}
              />
              <Text style={styles.cardName}>{item.first_name}</Text>
            </View>
            <View
              style={[
                styles.cardLink,
                {
                  backgroundColor: item.card_link_status
                    ? '#E3FFE0'
                    : '#FFEAEE',
                },
              ]}>
              <Text
                style={[
                  styles.cardLinkTxt,
                  {color: item.card_link_status ? '#19BB5A' : '#EA1A0D'},
                ]}>
                {item.card_link_status ? 'Linked' : 'Unlinked'}
              </Text>
            </View>
            <Text style={styles.cardNum}>{item.short_code}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.CloseWrapper}
              onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name="close-sharp" size={28} style={styles.closeBtn} />
            </TouchableOpacity>

            <View style={{width: '100%'}}>
              <Button
                primary
                title="Edit"
                onPress={() => {
                  navigation.navigate('EditCard', {
                    url: url,
                    id: id,
                    firs_tName: firstName,
                    job_Title: jobTitle,
                  });
                  setModalVisible(false);
                }}
              />
              <Button
                // onPress={() => navigation.navigate('ReadNfc')}
                onPress={() => {
                  navigation.navigate('ReadNfc', {
                    url: url,
                    id: id,
                    first_Name: firstName,
                    job_Title: jobTitle,
                  });
                  setModalVisible(false);
                }}
                title="Link with NFC"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BatchCards;
