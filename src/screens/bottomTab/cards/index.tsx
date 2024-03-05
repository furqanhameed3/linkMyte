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
import styles from './styles';
import {COLORS, IMAGES, Ionicons, h} from '../../../constants';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Button from '../../../components/Button';

const Cards = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.employeeReducer);
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [cardsList, setCardsList] = useState();
  const [url, setUrl] = useState();
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();
  const [cardNumber, setCardNumber] = useState();

  useEffect(() => {
    if (isFocused) {
      getCardsList();
    }
  }, [isFocused, token]);
  const getCardsList = async () => {
    try {
      const response: any = await axios.get('cards-listing', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCardsList(response?.data?.data?.data);
      console.log(
        'cards-listing Api Response()',
        JSON.stringify(response.data.data, null, 4),
      );
    } catch (error: any) {
      console.log('ERROR getAllPosts() API ', JSON.stringify(error, null, 4));
      return {
        error: true,
        message: `${error.message}`,
      };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View />
        <Text style={styles.title}>Cards</Text>
        <TouchableOpacity>
          <Image source={IMAGES.filter} style={styles.filterImg} />
        </TouchableOpacity>
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

export default Cards;
