import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import React from 'react';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';

type CenterItemsWrapperProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const CenterItemsWrapper: React.FC<CenterItemsWrapperProps> = ({
  children,
  style,
}) => {
  const {colors} = useGlobalStore();
  return (
    <View
      style={[
        {
          backgroundColor: colors.primary,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default CenterItemsWrapper;
