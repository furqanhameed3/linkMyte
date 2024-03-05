import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants';
import Button from '../../components/Button';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useToastHook} from '../../hooks/useToast';

const ReadNfc = ({route, navigation}: any) => {
  const {url, id} = route.params;
  const {token} = useSelector((state: any) => state.employeeReducer);
  const {showSuccessToast, showErrorToast} = useToastHook();

  useEffect(() => {
    writeNFC();
  }, []);
  const onSubmit = async () => {
    try {
      let data = {
        id: id,
        status: 1,
      };
      // const headers = {headers: {'Content-Type': 'application/json'}};
      console.log('data', data);

      const response = await axios.post('link-status', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('SUCCESS Linked', JSON.stringify(response.data, null, 4));
      showSuccessToast(response?.data?.message);
      Alert.alert(response?.data?.message);
      navigation.reset({
        index: 0,
        routes: [{name: 'AppStack'}],
      });
    } catch (error: any) {
      console.log('ERROR Linked() API', JSON.stringify(error, null, 4));

      return {
        error: true,
        message: `${error.message}`,
      };
    }
  };

  const writeNFC = async () => {
    let result = false;

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.uriRecord(url)]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        Alert.alert('Card Linked Successfully');
        console.log('Card Linked Successfully');

        result = true;
      }
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

    return result;
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.readNfc} style={styles.Image} />
      <Text style={styles.text}>
        Kindly bring the card closer to the phone to activate it
      </Text>
      <View style={{width: '100%'}}>
        <Button onPress={() => onSubmit()} primary title="Done" />
      </View>
    </View>
  );
};

export default ReadNfc;
