import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const UsernameSectionComponent = () => {
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Create your Username"
        subtitle="This Username will be Public to all users."
      />
      <AuthInputComponent
        placeholder="Username"
        type="default"
        value={fullSignupDetail.username}
        onChangeText={text => {
          setFullSignupDetail({username: text});
        }}
      />
    </React.Fragment>
  );
};

export default UsernameSectionComponent;
