import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants';
import Button from '../../components/Button';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

const ReadNfc = () => {
  useEffect(() => {
    readNdef();
  }, []);
  const readNdef = async () => {
    // try {
    const deviceIsSupported = await NfcManager.isSupported();
    console.log('device is supported:', deviceIsSupported);
    // register for the NFC tag with NDEF in it
    await NfcManager.requestTechnology(NfcTech.Ndef);
    // the resolved tag object will contain `ndefMessage` property
    const tag = await NfcManager.getTag();
    console.log('tag', tag);

    // } catch (ex) {
    //   console.warn('Oops!', ex);
    // } finally {
    //   // stop the nfc scanning
    //   NfcManager.cancelTechnologyRequest();
    // }
  };
  return (
    <View style={styles.container}>
      <Image source={IMAGES.readNfc} style={styles.Image} />
      <Text style={styles.text}>
        Kindly bring the card closer to the phone to activate it
      </Text>
      <View style={{width: '100%'}}>
        <Button primary title="Done" />
      </View>
    </View>
  );
};

export default ReadNfc;
