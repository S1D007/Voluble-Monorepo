import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import KeyboardHideWrapper from './KeyboardHideWrapper';

type SafeAreaScreenWrapperProps = {
  children: React.ReactNode;
};

const SafeAreaScreenWrapper: React.FC<SafeAreaScreenWrapperProps> = ({
  children,
}) => {
  return (
    <KeyboardHideWrapper>
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        {children}
      </SafeAreaView>
    </KeyboardHideWrapper>
  );
};

export default SafeAreaScreenWrapper;
