import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../../../../common/components/Button';
import useAuthStore, {
  SignupSections,
} from '../../../../../suppliers/zustand/useAuthStore';
import {
  FULL_SIGNUP_SECTIONS,
  FullSignupSections,
} from '../../FullSignup/FullSignup';
import {ANONYMOUS_SIGNUP_SECTIONS} from '../../Anonymous/Anonymous';

const NavigationButtonComponent = () => {
  const {navigationIndex, setNavigationIndex, currentSelectedSection} =
    useAuthStore();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}>
      {navigationIndex > 0 && (
        <Button
          disabled={navigationIndex === 0}
          onPress={() => {
            setNavigationIndex(navigationIndex - 1);
          }}
          backgroundColor={'#171717'}
          title="Previous"
        />
      )}
      {navigationIndex > FullSignupSections.Email && (
        <Button
          onPress={() => {
            setNavigationIndex(navigationIndex + 1);
          }}
          backgroundColor={'#171717'}
          title="Skip"
        />
      )}
      <Button
        onPress={() => {
          if (
            (currentSelectedSection === SignupSections.ANONYMOUS_SIGNUP &&
              navigationIndex === ANONYMOUS_SIGNUP_SECTIONS.length - 1) ||
            (currentSelectedSection === SignupSections.FULL_SIGNUP &&
              navigationIndex === FULL_SIGNUP_SECTIONS.length - 1)
          ) {
            return;
          }
          setNavigationIndex(navigationIndex + 1);
        }}
        title={
          (currentSelectedSection === SignupSections.ANONYMOUS_SIGNUP &&
            navigationIndex === ANONYMOUS_SIGNUP_SECTIONS.length - 1) ||
          (currentSelectedSection === SignupSections.FULL_SIGNUP &&
            navigationIndex === FULL_SIGNUP_SECTIONS.length - 1)
            ? 'Finish'
            : 'Continue'
        }
      />
    </View>
  );
};

export default NavigationButtonComponent;
