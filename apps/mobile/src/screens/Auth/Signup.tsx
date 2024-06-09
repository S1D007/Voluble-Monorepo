import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import FullSignup from './Signup/FullSignup/FullSignup';
import AnonymousSignup from './Signup/Anonymous/Anonymous';
import useAuthStore, {
  SignupSections,
} from '../../suppliers/zustand/useAuthStore';

const TABS = [<FullSignup />, <AnonymousSignup />];

const Signup = () => {
  const {colors} = useGlobalStore();
  const {
    navigationIndex,
    setNavigationIndex,
    setCurrentSelectedSection,
    currentSelectedSection,
  } = useAuthStore();
  return (
    <React.Fragment>
      <Text
        style={{
          fontFamily: fonts.GilroyBold,
          color: colors.text,
          fontSize: 36,
          marginTop: 20,
        }}>
        Yo Wsupppp!!?
      </Text>
      <Text
        style={{
          fontFamily: fonts.GilroyMedium,
          color: colors.text2,
          fontSize: 18,
        }}>
        Lets explore, Signup now!
      </Text>
      <SegmentedControl
        values={['Full Signup', 'Anonymous']}
        selectedIndex={currentSelectedSection}
        onChange={event => {
          setNavigationIndex(0);
          setCurrentSelectedSection(
            event.nativeEvent.selectedSegmentIndex === 0
              ? SignupSections.FULL_SIGNUP
              : SignupSections.ANONYMOUS_SIGNUP,
          );
        }}
        style={{
          width: '90%',
          // backgroundColor: '#171717',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          // marginVertical: 10,
        }}
        tintColor="#888"
        activeFontStyle={{
          color: 'white',
        }}
        fontStyle={{
          color: '#888',
        }}
      />
      <View
        style={{
          width: '100%',
          padding: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        {TABS[currentSelectedSection]}
      </View>
    </React.Fragment>
  );
};

export default Signup;
