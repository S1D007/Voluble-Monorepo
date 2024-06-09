import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';

type ButtonProps = {
  onPress?: () => void;
  title: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  backgroundColor,
  disabled,
}) => {
  const {colors} = useGlobalStore();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        minHeight: 50,
        maxHeight: 50,
        flex: 1,
        width: '100%',
        borderRadius: 18,
        backgroundColor: backgroundColor || colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={{
          fontFamily: fonts.GilroyBold,
          color: 'white',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
