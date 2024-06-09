import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {fonts} from '../../../enum/fonts';
import useGlobalStore from '../../../suppliers/zustand/useGlobalStore';
import KeyboardHideWrapper from '../../../common/wrapper/KeyboardHideWrapper';
import useAuthStore from '../../../suppliers/zustand/useAuthStore';

type AuthInputComponentProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type: TextInputProps['keyboardType'];
  isPassword?: boolean;
};

const AuthInputComponent: React.FC<AuthInputComponentProps> = ({
  placeholder,
  onChangeText,
  type,
  isPassword,
  value,
}) => {
  const {colors, colorSchema} = useGlobalStore();
  const {navigationIndex} = useAuthStore();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        height: 60,
        width: '100%',
        borderRadius: 18,
        borderColor: '#888',
        borderWidth: colorSchema === 'light' ? 1 : 0,
        backgroundColor: colorSchema === 'light' ? 'transparent' : '#171717',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 18,
      }}>
      <TextInput
        value={value}
        // autoFocus={navigationIndex > 0 ? true : false}
        onChangeText={onChangeText}
        style={{
          width: '100%',
          fontFamily: fonts.GilroyMedium,
          color: colors.text,
          fontSize: 18,
          height: '100%',
        }}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        keyboardType={type}
        cursorColor={colors.secondary}
      />
    </TouchableOpacity>
  );
};

export default AuthInputComponent;
