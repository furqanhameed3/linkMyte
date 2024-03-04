import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {h} from '../../constants';
import Button from '../../components/Button';
import axios from 'axios';
import {saveToken, saveUser} from '../../redux/slices/employeeSlice';
import {dispatch} from '../../redux/store';
import {useToastHook} from '../../hooks/useToast';

axios.defaults.baseURL = 'https://linkmyte.com/api/';

const Login = ({navigation}: any) => {
  const ref_PinInput = useRef(null);
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {showSuccessToast, showErrorToast} = useToastHook();

  console.log('pin', pin);

  const onSubmit = async () => {
    try {
      let data = JSON.stringify({
        identification_code: pin,
      });
      const headers = {headers: {'Content-Type': 'application/json'}};
      const response = await axios.post('login', data, headers);
      setIsLoading(false);
      console.log('SUCCESS Login', JSON.stringify(response.data, null, 4));
      if (response?.data?.success === true) {
        // axios.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${response?.data?.data?.token}`;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        dispatch(saveToken(response?.data?.data?.token));
        dispatch(saveUser(response.data.user));
        // showSuccessToast(response?.data?.message);

        console.log('True');
      } else {
        showErrorToast(response?.data?.message);
      }
    } catch (error: any) {
      console.log('ERROR login() API', JSON.stringify(error, null, 4));
      setIsLoading(false);
      return {
        error: true,
        message: `${error.message}`,
      };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.text}>
        Kindly input your staff identification code, please.
      </Text>
      <SmoothPinCodeInput
        ref={ref_PinInput}
        placeholder={<View style={styles.pinPlaceholder} />}
        mask={<View style={styles.pinMask} />}
        maskDelay={1000}
        password={false}
        cellStyle={styles.cellStyle}
        cellStyleFocused={styles.cellStyleFocused}
        cellSpacing={10}
        textStyle={styles.txtPin}
        value={pin}
        onTextChange={(code: any) => setPin(code)}
        editable={true}
      />
      <View style={{width: '100%', marginTop: h('18%'), alignItems: 'center'}}>
        <Button primary title="Login" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default Login;
