import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const PasswordSectionComponent = () => {
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Password Security 🔐"
        subtitle="Create a password to secure your account."
      />
      <AuthInputComponent
        placeholder="Password"
        type="default"
        isPassword
        value={fullSignupDetail.password}
        onChangeText={text => {
          setFullSignupDetail({password: text});
        }}
      />
    </React.Fragment>
  );
};

export default PasswordSectionComponent;
