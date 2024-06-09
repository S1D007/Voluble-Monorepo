import {View, Text} from 'react-native';
import React from 'react';
import {fonts} from '../../../enum/fonts';
import useGlobalStore from '../../../suppliers/zustand/useGlobalStore';

const FooterComponent = () => {
  const {colors} = useGlobalStore();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}>
      <Text
        style={{
          fontFamily: fonts.GilroySemibold,
          color: colors.text,
          fontSize: 18,
        }}>
        Don't have an account?
      </Text>
      <Text
        style={{
          fontFamily: fonts.GilroyBold,
          color: colors.secondary,
          fontSize: 18,
          textDecorationLine: 'underline',
        }}>
        Sign Up
      </Text>
    </View>
  );
};

export default FooterComponent;
