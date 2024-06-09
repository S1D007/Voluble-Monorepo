import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const PasswordSectionComponent = () => {
  const {anonymousSignupDetail, setAnonymousSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Password Security 🔐"
        subtitle="Create a password to secure your account."
      />
      <AuthInputComponent
        value={anonymousSignupDetail.password}
        onChangeText={password => setAnonymousSignupDetail({password})}
        placeholder="Password"
        type="default"
        isPassword
      />
    </React.Fragment>
  );
};

export default PasswordSectionComponent;
