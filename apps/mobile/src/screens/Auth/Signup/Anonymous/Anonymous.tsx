import {View, Text} from 'react-native';
import React from 'react';
import AuthInputComponent from '../../components/AuthInputComponent';
import TextContentsComponent from '../../components/TextContentsComponent';
import Button from '../../../../common/components/Button';
import NavigationButtonComponent from '../common/components/NavigationButtonComponent';
import PasswordSectionComponent from './components/PasswordSectionComponent';
import UsernameSectionComponent from './components/UsernameSectionComponent';
import useAuthStore from '../../../../suppliers/zustand/useAuthStore';

export const ANONYMOUS_SIGNUP_SECTIONS = [
  <UsernameSectionComponent />,
  <PasswordSectionComponent />,
];

const AnonymousSignup = () => {
  const {navigationIndex} = useAuthStore();
  return (
    <View
      style={{
        width: '100%',
        gap: 10,
      }}>
      {ANONYMOUS_SIGNUP_SECTIONS[navigationIndex]}
      <NavigationButtonComponent />
    </View>
  );
};

export default AnonymousSignup;
