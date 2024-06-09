import {View, Text} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const NameSectionComponent = () => {
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="My Name is Chotu Badmosh!"
        subtitle="Add your Name, it will be visible to your Friends Only."
      />
      <AuthInputComponent
        placeholder="Name"
        type="default"
        value={fullSignupDetail.name}
        onChangeText={text => {
          setFullSignupDetail({name: text});
        }}
      />
    </React.Fragment>
  );
};

export default NameSectionComponent;
