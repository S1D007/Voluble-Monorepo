import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import NavigationButtonComponent from '../common/components/NavigationButtonComponent';
import UsernameSectionComponent from './components/UsernameSectionComponent';
import PasswordSectionComponent from './components/PasswordSectionComponent';
import useAuthStore from '../../../../suppliers/zustand/useAuthStore';
import DateOfBirthSectionComponent from './components/DateOfBirthSectionComponent';
import NameSectionComponent from './components/NameSectionComponent';
import EmailSectionComponent from './components/EmailSectionComponent';
import {fonts} from '../../../../enum/fonts';
import useGlobalStore from '../../../../suppliers/zustand/useGlobalStore';
import AvatarSectionComponent from './components/AvatarSectionComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BackgroundImageSectionComponent from './components/BackgroundImageSectionComponent';
import BackgroundMusicSectionComponent from './components/BackgroundMusicSectionComponent';

export enum FullSignupSections {
  Username = 0,
  Password = 1,
  DateOfBirth = 2,
  Name = 3,
  Email = 4,
}

export const FULL_SIGNUP_SECTIONS = [
  <UsernameSectionComponent />,
  <PasswordSectionComponent />,
  <DateOfBirthSectionComponent />,
  <NameSectionComponent />,
  <EmailSectionComponent />,
  <AvatarSectionComponent />,
  <BackgroundImageSectionComponent />,
  <BackgroundMusicSectionComponent />,
];

const FullSignup = () => {
  const {navigationIndex, setNavigationIndex} = useAuthStore();
  const {colors} = useGlobalStore();

  return (
    <View
      style={{
        width: '100%',
        gap: 10,
      }}>
      {FULL_SIGNUP_SECTIONS[navigationIndex]}
      <NavigationButtonComponent />
    </View>
  );
};

export default FullSignup;
