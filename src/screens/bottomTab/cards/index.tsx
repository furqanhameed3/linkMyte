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
  const [lastName, setLastName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [gender, setGender] = useState();
  const [bio, setBio] = useState();
  const [arFirstName, setArFirstName] = useState();
  const [arLastName, setArLastName] = useState();
  const [arJobTitle, setArJobTitle] = useState();
  const [arBio, setArBio] = useState();
  const [logo, setLogo] = useState();
  const [profileImg, setProfileImg] = useState();
  const [instagram, setInstagram] = useState();
  const [youtube, setYoutube] = useState();
  const [linkedIn, setLinkedIN] = useState();
  const [twitter, setTwitter] = useState();
  const [snapchat, setSnapchat] = useState();
  const [facebook, setFacebook] = useState();
  const [phone1, setPhone1] = useState();
  const [phone2, setPhone2] = useState();
  const [whatsapp1, setWhatsapp1] = useState();
  const [whatsapp2, setWhatsapp2] = useState();
  const [googlemap, setGooglemap] = useState();
  const [email, setEmail] = useState();
  const [tiktok, setTiktok] = useState();
  const [thread, setThread] = useState();
  const [pdfLink, setPdfLink] = useState();
  const [website, setWebsite] = useState();
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
              setLastName(item?.last_name);
              setBio(item?.company_desc);
              setGender(item?.gender);
              setArFirstName(item?.ar_first_name);
              setArLastName(item?.ar_last_name);
              setArJobTitle(item?.ar_job_title);
              setArBio(item?.ar_company_desc);
              setLogo(item?.brand_logo);
              setProfileImg(item?.profile_pic);
              setInstagram(item?.instagramlink);
              setYoutube(item?.youtublelink);
              setLinkedIN(item?.linkedinlink);
              setTwitter(item?.twitterlink);
              setSnapchat(item?.snapchatlink);
              setFacebook(item?.facebooklink);
              setPhone1(item?.mobile);
              setPhone2(item?.second_mobile_no);
              setWhatsapp1(item?.whatsup_number);
              setWhatsapp2(item?.second_whatsup_number);
              setGooglemap(item?.googlemaplink);
              setEmail(item?.email);
              setTiktok(item?.tiktoklink);
              setThread(item?.threadlink);
              setPdfLink(item?.pdflink);
              setWebsite(item?.website);
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
                    id: id,
                    first_Name: firstName,
                    lastName: lastName,
                    job_Title: jobTitle,
                    bio: bio,
                    gendar: gender,
                    ar_First_Name: arFirstName,
                    ar_Last_Name: arLastName,
                    ar_Job_Title: arJobTitle,
                    ar_Bio: arBio,
                    brand_logo: logo,
                    profileImg: profileImg,
                    instagram: instagram,
                    youtube: youtube,
                    linkedIn: linkedIn,
                    twitter: twitter,
                    snapchat: snapchat,
                    facebook: facebook,
                    phone1: phone1,
                    phone2: phone2,
                    whatsapp1: whatsapp1,
                    whatsapp2: whatsapp2,
                    email: email,
                    website: website,
                    googlemap: googlemap,
                    tiktok: tiktok,
                    thread: thread,
                    pdfLink: pdfLink,
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
