import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const UsernameSectionComponent = () => {
  const {anonymousSignupDetail, setAnonymousSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Create your Username"
        subtitle="This Username will be *not* be Public to anyone."
      />
      <AuthInputComponent
        value={anonymousSignupDetail.username}
        placeholder="Username"
        type="default"
        onChangeText={username => setAnonymousSignupDetail({username})}
      />
    </React.Fragment>
  );
};

export default UsernameSectionComponent;
