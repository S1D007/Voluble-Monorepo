import {View, Text, Button as BTN} from 'react-native';
import React from 'react';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';
import AuthInputComponent from './components/AuthInputComponent';
import Button from '../../common/components/Button';

const Login = () => {
  const {colors} = useGlobalStore();
  return (
    <React.Fragment>
      <Text
        style={{
          fontFamily: fonts.GilroyBold,
          color: colors.text,
          fontSize: 36,
          marginTop: 20,
        }}>
        Welcome Back!
      </Text>
      <Text
        style={{
          fontFamily: fonts.GilroySemibold,
          color: colors.text2,
          fontSize: 18,
          marginBottom: 20,
        }}>
        Login to your account
      </Text>
      <View
        style={{
          width: '100%',
          padding: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <AuthInputComponent type="default" placeholder="Username" />
        <AuthInputComponent type="visible-password" placeholder="Password" />
        <View style={{height: 50, width: '100%'}}>
          <Button title="Login" />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Login;
