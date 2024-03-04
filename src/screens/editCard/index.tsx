import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants';
import Button from '../../components/Button';

const EditCard = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: '100%', paddingHorizontal: 10}}
            placeholder="Full Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: '100%', paddingHorizontal: 10}}
            placeholder="Company Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: '100%', paddingHorizontal: 10}}
            placeholder="Job Title"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: '100%', paddingHorizontal: 10}}
            placeholder="Mobile Number"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: '100%', paddingHorizontal: 10}}
            placeholder="Email"
          />
        </View>
        <TouchableOpacity style={styles.logoBtn}>
          <Text style={styles.logoTxt}>Upload Logo</Text>
        </TouchableOpacity>
        <Image source={IMAGES.profileImg} style={styles.profileImg} />

        <View style={styles.imgContainer}>
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
        </View>
        <View style={styles.imgContainer}>
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
        </View>
        <View style={styles.imgContainer}>
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
        </View>
        <View>
          <Button primary title="Done" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditCard;
