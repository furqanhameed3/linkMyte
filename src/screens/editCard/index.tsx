import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {COLORS, IMAGES, h} from '../../constants';
import Button from '../../components/Button';
import {Formik} from 'formik';
import axios from 'axios';
import {useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {Dropdown} from 'react-native-element-dropdown';
import * as Yup from 'yup';

const EditCard = ({navigation, route}: any) => {
  const {url, id, first_Name, job_Title} = route.params;
  console.log('Params', route.params);
  console.log('first Name', first_Name);

  const {token} = useSelector((state: any) => state.employeeReducer);
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [gender, setGender] = useState({});
  const genderData = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'rather not to say', value: 2},
  ];
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    websiteLink: string;
    tiktok: string;
    thread: string;
    pdfLink: string;
    jobTitle: string;
    bio: string;
    gender: string;
    arFirstName: string;
    arLastName: string;
    arJobTitle: string;
    arBio: string;
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    googlemap: string;
    phone1: string;
    phone2: string;
    whatsapp1: string;
    whatsapp2: string;
  };
  const validation = Yup.object().shape({
    firstName: Yup.string().required('required' as string),
    lastName: Yup.string().required('required' as string),
    email: Yup.string().required('required' as string),
    websiteLink: Yup.string().required('required' as string),
    tiktok: Yup.string().required('required' as string),
    thread: Yup.string().required('required' as string),
    pdfLink: Yup.string().required('required' as string),
    jobTitle: Yup.string().required('required' as string),
    bio: Yup.string().required('required' as string),
    arFirstName: Yup.string().required('required' as string),
    arLastName: Yup.string().required('required' as string),
    arJobTitle: Yup.string().required('required' as string),
    arBio: Yup.string().required('required' as string),
    instagram: Yup.string().required('required' as string),
    facebook: Yup.string().required('required' as string),
    twitter: Yup.string().required('required' as string),
    linkedin: Yup.string().required('required' as string),
    googlemap: Yup.string().required('required' as string),
    phone1: Yup.string().required('required' as string),
    phone2: Yup.string().required('required' as string),
    whatsapp1: Yup.string().required('required' as string),
    whatsapp2: Yup.string().required('required' as string),
  });

  const pickProfileImage = async () => {
    try {
      const img: any = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });

      setImage(img);
    } catch (error) {
      console.log('e', error);
    }
  };
  const pickLogoImage = async () => {
    try {
      const img: any = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });

      setLogo(img);
    } catch (error) {
      console.log('e', error);
    }
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append('profile_pic', {
          uri: image?.path,
          name: 'logo.jpg',
          type: image?.mime,
        });
      }
      if (logo) {
        formData.append('brand_logo', {
          uri: logo?.path,
          name: 'logo.jpg',
          type: logo?.mime,
        });
      }
      formData.append('id', id);

      if (values.firstName) {
        formData.append('first_name', values.firstName);
      }

      if (values.lastName) {
        formData.append('last_name', values.lastName);
      }

      if (values.email) {
        formData.append('email', values.email);
      }

      if (values.websiteLink) {
        formData.append('website', values.websiteLink);
      }

      if (values.tiktok) {
        formData.append(
          'tiktoklink',
          `https://www.tiktok.com/@${values.tiktok}`,
        );
      }

      if (values.thread) {
        formData.append('threadlink', ` https://thread.com/@${values.thread}`);
      }

      if (values.pdfLink) {
        formData.append('pdflink', values.pdfLink);
      }

      if (values.jobTitle) {
        formData.append('job_title', values.jobTitle);
      }

      if (values.bio) {
        formData.append('bio', values.bio);
      }

      if (values.arFirstName) {
        formData.append('ar_first_name', values.arFirstName);
      }

      if (values.arLastName) {
        formData.append('ar_last_name', values.arLastName);
      }

      if (values.arJobTitle) {
        formData.append('ar_job_title', values.arJobTitle);
      }

      if (values.arBio) {
        formData.append('ar_bio', values.arBio);
      }

      if (values.instagram) {
        formData.append(
          'instagramlink',
          `https://instagram.com/${values.instagram}`,
        );
      }

      if (values.facebook) {
        formData.append(
          'facebooklink',
          `https://www.facebook.com/${values.facebook}`,
        );
      }
      if (values.snapchat) {
        formData.append(
          'snapchatlink',
          `https://www.snapchat.com/add/${values.snapchat}`,
        );
      }
      if (values.youtube) {
        formData.append(
          'youtublelink',
          `https://www.youtube.com/${values.youtube}`,
        );
      }

      if (values.twitter) {
        formData.append('twitterlink', `https://twitter.com/${values.twitter}`);
      }

      if (values.linkedin) {
        formData.append(
          'linkedinlink',
          `https://www.linkedin.com/in/${values.linkedin}`,
        );
      }

      if (values.googlemap) {
        formData.append('googlemaplink', values.googlemap);
      }

      if (values.phone1) {
        formData.append('mobile', values.phone1);
      }

      if (values.phone2) {
        formData.append('second_mobile_no', values.phone2);
      }

      if (values.whatsapp1) {
        formData.append('whatsup_number', values.whatsapp1);
      }

      if (values.whatsapp2) {
        formData.append('second_whatsup_number', values.whatsapp2);
      }

      if (values.gender) {
        formData.append('gender', values.gender);
      }
      formData.append('status', 1);
      formData.append('card_link_status', 1);
      formData.append('initialized_status', 1);
      formData.append('card_language', 1);
      formData.append('premium_status', 1);
      formData.append('subscription_status', 1);

      const response = await axios.post('cards-detials-update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('form Data', formData);

      console.log('SUCCESS Update API', JSON.stringify(response, null, 4));
      Alert.alert(response?.data?.message);
      navigation.reset({
        index: 0,
        routes: [{name: 'AppStack'}],
      });
    } catch (error: any) {
      console.log('ERROR Update () API', JSON.stringify(error, null, 4));

      return {
        error: true,
        message: `${error.message}`,
      };
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 50,
            justifyContent: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => pickLogoImage()}
              style={styles.logoBtn}>
              <Text style={styles.logoTxt}>Upload Logo</Text>
            </TouchableOpacity>
            <Image
              source={logo ? {uri: logo?.path} : IMAGES.profileImg}
              style={styles.profileImg}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => pickProfileImage()}
              style={styles.logoBtn}>
              <Text style={styles.logoTxt}>Profile Image</Text>
            </TouchableOpacity>
            <Image
              source={image ? {uri: image?.path} : IMAGES.profileImg}
              style={styles.profileImg}
            />
          </View>
        </View>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            websiteLink: '',
            tiktok: '',
            thread: '',
            pdfLink: '',
            jobTitle: '',
            bio: '',
            gender: '',
            arFirstName: '',
            arLastName: '',
            arJobTitle: '',
            arBio: '',
            instagram: '',
            facebook: '',
            twitter: '',
            snapchat: '',
            youtube: '',
            linkedin: '',
            googlemap: '',
            phone1: '',
            phone2: '',
            whatsapp1: '',
            whatsapp2: '',
          }}
          onSubmit={onSubmit}
          // onSubmit={values => console.log('values', values)}
        >
          {({handleChange, handleSubmit, values, setFieldValue}) => (
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="First Name"
                  onChangeText={handleChange('firstName')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Last Name"
                  onChangeText={handleChange('lastName')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                />
              </View>
              <Dropdown
                style={styles.dropdownType}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.placeholderStyle}
                data={genderData}
                labelField="label"
                valueField="value"
                placeholder={'Select title'}
                value={gender}
                onChange={(item: any) => {
                  setGender({label: item?.label, value: item?.value});

                  handleChange('gender');
                }}
                renderItem={({label, value}: any) => {
                  return (
                    <View
                      style={{
                        padding: h('1%'),
                        backgroundColor:
                          gender?.label === label
                            ? COLORS.secondary
                            : COLORS.white,
                      }}>
                      <Text
                        style={{
                          ...styles.itemTextStyle,
                          color:
                            gender.label === label
                              ? COLORS.white
                              : COLORS.secondary,
                        }}>
                        {label}
                      </Text>
                    </View>
                  );
                }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Website"
                  onChangeText={handleChange('websiteLink')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Tiktok Username"
                  onChangeText={handleChange('tiktok')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Thread Username"
                  onChangeText={handleChange('thread')}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="PDF Link"
                  onChangeText={handleChange('pdfLink')}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Job Title"
                  onChangeText={handleChange('jobTitle')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Bio"
                  onChangeText={handleChange('bio')}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic First Name"
                  onChangeText={handleChange('arFirstName')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Last Name"
                  onChangeText={handleChange('arLastName')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Job Title"
                  onChangeText={handleChange('arJobTitle')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Bio"
                  onChangeText={handleChange('arBio')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Instagram Username"
                  onChangeText={handleChange('instagram')}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Facebook Username"
                  onChangeText={handleChange('facebook')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Snapchat Username"
                  onChangeText={handleChange('snapchat')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Youtube Username"
                  onChangeText={handleChange('youtube')}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Twitter Username"
                  onChangeText={handleChange('twitter')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Linkedin Username"
                  onChangeText={handleChange('linkedin')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Googlemap Link"
                  onChangeText={handleChange('googlemap')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Phone 1"
                  onChangeText={handleChange('phone1')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Phone 2"
                  onChangeText={handleChange('phone2')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Whatsapp 1"
                  onChangeText={handleChange('whatsapp1')}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Whatsapp 2"
                  onChangeText={handleChange('whatsapp2')}
                />
              </View>
              <Button onPress={handleSubmit} primary title="Done" />
            </View>
          )}
        </Formik>

        {/* <TouchableOpacity style={styles.logoBtn}>
          <Text style={styles.logoTxt}>Upload Logo</Text>
        </TouchableOpacity>
        <Image source={IMAGES.profileImg} style={styles.profileImg} /> */}

        {/* <View style={styles.imgContainer}>
          <View>
            <Image source={IMAGES.phone} />
            <Text style={styles.imgTxt}>Phone</Text>
          </View>
          <View>
            <Image source={IMAGES.email} />
            <Text style={styles.imgTxt}>Email</Text>
          </View>
          <View>
            <Image source={IMAGES.whatsApp} />
            <Text style={styles.imgTxt}>WhatsApp</Text>
          </View>
          <View>
            <Image source={IMAGES.website} />
            <Text style={styles.imgTxt}>Website</Text>
          </View>
        </View> */}
        {/* <View style={styles.imgContainer}>
          <View>
            <Image source={IMAGES.gmail} />
            <Text style={styles.imgTxt}>Gmail</Text>
          </View>
          <View>
            <Image source={IMAGES.twitter} />
            <Text style={styles.imgTxt}>X</Text>
          </View>
          <View>
            <Image source={IMAGES.facebook} />
            <Text style={styles.imgTxt}>Facebook</Text>
          </View>
          <View>
            <Image source={IMAGES.website} />
            <Text style={styles.imgTxt}>Website</Text>
          </View>
        </View> */}
        {/* <View style={styles.imgContainer}>
          <View>
            <Image source={IMAGES.threads} />
            <Text style={styles.imgTxt}>Threads</Text>
          </View>
          <View>
            <Image source={IMAGES.telegram} />
            <Text style={styles.imgTxt}>Telegram</Text>
          </View>
          <View>
            <Image source={IMAGES.linkedin} />
            <Text style={styles.imgTxt}>inkedin</Text>
          </View>
          <View>
            <Image source={IMAGES.insta} />
            <Text style={styles.imgTxt}>Instagram</Text>
          </View>
        </View> */}
        <View></View>
      </ScrollView>
    </View>
  );
};

export default EditCard;
