import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const EmailSectionComponent = () => {
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Add your Email"
        subtitle="This Email will be used to recover your account."
      />
      <AuthInputComponent
        placeholder="Email"
        type="email-address"
        value={fullSignupDetail.email}
        onChangeText={text => {
          setFullSignupDetail({email: text});
        }}
      />
    </React.Fragment>
  );
};

export default EmailSectionComponent;
