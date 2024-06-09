import {View, Text} from 'react-native';
import React from 'react';
import LogoSVG from '../../../assets/logo/logo.svg';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';

const Logo = () => {
  const {colors} = useGlobalStore();
  return <LogoSVG width={80} height={80} fill={colors.text} />;
};

export default Logo;
