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
  const {
    id,
    first_Name,
    lastName,
    job_Title,
    bio,
    gendar,
    ar_First_Name,
    ar_Last_Name,
    ar_Job_Title,
    ar_Bio,
    brand_logo,
    profileImg,
    instagram,
    youtube,
    linkedIn,
    twitter,
    snapchat,
    facebook,
    phone1,
    phone2,
    whatsapp1,
    whatsapp2,
    email,
    website,
    googlemap,
    tiktok,
    thread,
    pdfLink,
  } = route.params;
  const {token} = useSelector((state: any) => state.employeeReducer);
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [gender, setGender] = useState({});
  const genderData = [
    {label: 'male', value: 0},
    {label: 'female', value: 1},
    {label: 'rather not to say', value: 2},
  ];

  const link = 'https://linkmyte.com/';

  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    websiteLink: string;
    tiktok: URL;
    thread: URL;
    pdfLink: URL;
    jobTitle: string;
    bio: string;
    gender: string;
    arFirstName: string;
    arLastName: string;
    arJobTitle: string;
    youtube: string;
    snapchat: URL;
    arBio: string;
    instagram: URL;
    facebook: URL;
    twitter: URL;
    linkedin: URL;
    googlemap: URL;
    phone1: string;
    phone2: string;
    whatsapp1: string;
    whatsapp2: string;
  };
  const validation = Yup.object().shape({
    firstName: Yup.string().required('required' as string),
    jobTitle: Yup.string().required('required' as string),
    // lastName: Yup.string().required('required' as string),
    // email: Yup.string().required('required' as string),
    // websiteLink: Yup.string().required('required' as string),
    // tiktok: Yup.string().required('required' as string),
    // thread: Yup.string().required('required' as string),
    // pdfLink: Yup.string().required('required' as string),
    // bio: Yup.string().required('required' as string),
    // arFirstName: Yup.string().required('required' as string),
    // arLastName: Yup.string().required('required' as string),
    // arJobTitle: Yup.string().required('required' as string),
    // arBio: Yup.string().required('required' as string),
    // instagram: Yup.string().required('required' as string),
    // facebook: Yup.string().required('required' as string),
    // twitter: Yup.string().required('required' as string),
    // linkedin: Yup.string().required('required' as string),
    // googlemap: Yup.string().required('required' as string),
    // phone1: Yup.string().required('required' as string),
    // phone2: Yup.string().required('required' as string),
    // whatsapp1: Yup.string().required('required' as string),
    // whatsapp2: Yup.string().required('required' as string),
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
        formData.append('tiktoklink', values.tiktok);
      }

      if (values.thread) {
        formData.append('threadlink', values.thread);
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
        formData.append('instagramlink', values.instagram);
      }

      if (values.facebook) {
        formData.append('facebooklink', values.facebook);
      }
      if (values.snapchat) {
        formData.append('snapchatlink', values.snapchat);
      }
      if (values.youtube) {
        formData.append('youtublelink', values.youtube);
      }

      if (values.twitter) {
        formData.append('twitterlink', values.twitter);
      }

      if (values.linkedin) {
        formData.append('linkedinlink', values.linkedin);
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
              source={
                logo
                  ? {uri: logo?.path}
                  : brand_logo
                  ? {uri: link + brand_logo}
                  : IMAGES.profileImg
              }
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
              source={
                image
                  ? {uri: image?.path}
                  : profileImg
                  ? {uri: link + profileImg}
                  : IMAGES.profileImg
              }
              style={styles.profileImg}
            />
          </View>
        </View>
        <Formik
          enableReinitialize={true}
          initialValues={{
            firstName: first_Name ?? '',
            lastName: lastName ?? '',
            email: email ?? '',
            websiteLink: website ?? '',
            tiktok: tiktok ?? '',
            thread: thread ?? '',
            pdfLink: pdfLink ?? '',
            jobTitle: job_Title ?? '',
            bio: bio ?? '',
            gender: gendar ?? '',
            arFirstName: ar_First_Name ?? '',
            arLastName: ar_Last_Name ?? '',
            arJobTitle: ar_Job_Title ?? '',
            arBio: ar_Bio ?? '',
            instagram: instagram ?? '',
            facebook: facebook ?? '',
            twitter: twitter ?? '',
            snapchat: snapchat ?? '',
            youtube: youtube ?? '',
            linkedin: linkedIn ?? '',
            googlemap: googlemap ?? '',
            phone1: phone1 ?? '',
            phone2: phone2 ?? '',
            whatsapp1: whatsapp1 ?? '',
            whatsapp2: whatsapp2 ?? '',
          }}
          onSubmit={onSubmit}
          validationSchema={validation}
          // onSubmit={values => console.log('values', values)}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <View>
              <Text style={styles.label}>First Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="First Name"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                />
              </View>
              {errors.firstName && touched.firstName && (
                <Text style={styles.txtError}>{errors.firstName}</Text>
              )}
              <Text style={styles.label}>Last Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Last Name"
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                />
              </View>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
              </View>
              <Text style={styles.label}>Gender</Text>
              <Dropdown
                style={styles.dropdownType}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.placeholderStyle}
                data={genderData}
                labelField="label"
                valueField={values.gender}
                placeholder={'Select Gender'}
                value={gender}
                onChange={(item: any) => {
                  setGender({label: item?.label, value: item?.value});
                  setFieldValue('gender', item?.label);
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
              <Text style={styles.label}>Website</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Website"
                  onChangeText={handleChange('websiteLink')}
                  value={values.websiteLink}
                />
              </View>
              <Text style={styles.label}>Tiktok Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://www.tiktok.com/@tiktok"
                  onChangeText={handleChange('tiktok')}
                  value={values.tiktok}
                />
              </View>
              <Text style={styles.label}>Thread Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://thread.com/@ali"
                  onChangeText={handleChange('thread')}
                  value={values.thread}
                />
              </View>
              <Text style={styles.label}>PDF Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="PDF Link"
                  onChangeText={handleChange('pdfLink')}
                  value={values.pdfLink}
                />
              </View>
              <Text style={styles.label}>Job Title</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Job Title"
                  onChangeText={handleChange('jobTitle')}
                  value={values.jobTitle}
                />
              </View>
              {errors.jobTitle && touched.jobTitle && (
                <Text style={styles.txtError}>{errors.jobTitle}</Text>
              )}
              <Text style={styles.label}>Bio</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Bio"
                  onChangeText={handleChange('bio')}
                  value={values.bio}
                />
              </View>
              <Text style={styles.label}>Arabic First Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic First Name"
                  onChangeText={handleChange('arFirstName')}
                  value={values.arFirstName}
                />
              </View>
              <Text style={styles.label}>Arabic Last Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Last Name"
                  onChangeText={handleChange('arLastName')}
                  value={values.arLastName}
                />
              </View>
              <Text style={styles.label}>Arabic Job Title</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Job Title"
                  onChangeText={handleChange('arJobTitle')}
                  value={values.arJobTitle}
                />
              </View>
              <Text style={styles.label}>Arabic Bio</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Arabic Bio"
                  onChangeText={handleChange('arBio')}
                  value={values.arBio}
                />
              </View>
              <Text style={styles.label}>Instagram Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://instagram.com/username"
                  onChangeText={handleChange('instagram')}
                  value={values.instagram}
                />
              </View>
              <Text style={styles.label}>Facebook Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://www.facebook.com/Username"
                  onChangeText={handleChange('facebook')}
                  value={values.facebook}
                />
              </View>
              <Text style={styles.label}>Snapchat Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Snapchat Username"
                  onChangeText={handleChange('snapchat')}
                  value={values.snapchat}
                />
              </View>

              <Text style={styles.label}>Youtube Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://www.youtube.com/Username"
                  onChangeText={handleChange('youtube')}
                  value={values.youtube}
                />
              </View>

              <Text style={styles.label}>Twitter Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://twitter.com/Username"
                  onChangeText={handleChange('twitter')}
                  value={values.twitter}
                />
              </View>

              <Text style={styles.label}>Linkedin Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://www.linkedin.com/in/username"
                  onChangeText={handleChange('linkedin')}
                  value={values.linkedin}
                />
              </View>

              <Text style={styles.label}>Googlemaps Url</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="https://www.google.com/maps"
                  onChangeText={handleChange('googlemap')}
                  value={values.googlemap}
                />
              </View>

              <Text style={styles.label}>Phone 1</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Phone Number 1"
                  onChangeText={handleChange('phone1')}
                  value={values.phone1}
                />
              </View>

              <Text style={styles.label}>Phone 2</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Phone Number 2"
                  onChangeText={handleChange('phone2')}
                  value={values.phone2}
                />
              </View>

              <Text style={styles.label}>Whatsapp 1</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Whatsapp Number 1"
                  onChangeText={handleChange('whatsapp1')}
                  value={values.whatsapp1}
                />
              </View>

              <Text style={styles.label}>Whatsapp 2</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: '100%', paddingHorizontal: 10}}
                  placeholder="Whatsapp Number 2"
                  onChangeText={handleChange('whatsapp2')}
                  value={values.whatsapp2}
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
      </ScrollView>
    </View>
  );
};

export default EditCard;
