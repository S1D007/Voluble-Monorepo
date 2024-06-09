import {View, Text} from 'react-native';
import React from 'react';
import {fonts} from '../../../enum/fonts';
import useGlobalStore from '../../../suppliers/zustand/useGlobalStore';

type TextContentsComponentProps = {
  title: string;
  subtitle: string;
};

const TextContentsComponent: React.FC<TextContentsComponentProps> = ({
  subtitle,
  title,
}) => {
  const {colors} = useGlobalStore();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        paddingHorizontal: 6,
      }}>
      <Text
        style={{
          fontFamily: fonts.GilroySemibold,
          color: colors.text,
          fontSize: 25,
          alignSelf: 'flex-start',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.GilroyMedium,
          color: colors.text2,
          fontSize: 14,
          alignSelf: 'flex-start',
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default TextContentsComponent;
