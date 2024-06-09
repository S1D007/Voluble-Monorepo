import {View, Text} from 'react-native';
import React from 'react';
import CenterItemsWrapper from '../../common/wrapper/CenterItemsWrapper';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';

export const SplashScreen = () => {
  const {colors} = useGlobalStore();
  return (
    <CenterItemsWrapper>
      <Text
        style={{
          color: colors.text,
          fontSize: 46,
          textAlign: 'center',
          marginTop: 20,
          fontFamily: fonts.GilroyBold,
        }}>
        Voluble
      </Text>
    </CenterItemsWrapper>
  );
};
