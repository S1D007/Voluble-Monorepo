import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import useGlobalStore from '../../../../../suppliers/zustand/useGlobalStore';
import {launchImageLibrary} from 'react-native-image-picker';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const BackgroundImageSectionComponent = () => {
  const {colors} = useGlobalStore();
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  const handleBackgroundImageSelectClick = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 1, selectionLimit: 1},
      response => {
        if (response.assets) {
          setFullSignupDetail({backgroundImage: response.assets[0].uri});
        } else {
          Alert.alert('Error', 'Failed to select image');
        }
      },
    );
  };
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Background Image for Profile? 🌄"
        subtitle="Select a background image for your profile."
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleBackgroundImageSelectClick}
          activeOpacity={0.8}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 16,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'dashed',
            borderWidth: 4,
            borderColor: colors.text2,
          }}>
          {fullSignupDetail.backgroundImage ? (
            <Image
              source={{uri: fullSignupDetail.backgroundImage}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                backgroundColor: colors.text2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome6 name="image" size={50} color={colors.primary} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default BackgroundImageSectionComponent;
