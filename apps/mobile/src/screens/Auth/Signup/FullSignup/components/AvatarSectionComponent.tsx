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

const AvatarSectionComponent = () => {
  const {colors} = useGlobalStore();
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  const handleAvatarSelectClick = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 1, selectionLimit: 1},
      response => {
        if (response.assets) {
          setFullSignupDetail({avatar: response.assets[0].uri});
        } else {
          Alert.alert('Error', 'Failed to select image');
        }
      },
    );
  };
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Smile Please? 📸"
        subtitle="Add a profile picture! As they say, a picture is worth a thousand words."
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleAvatarSelectClick}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'dashed',
            borderWidth: 4,
            borderColor: colors.text2,
            elevation: 10,
          }}>
          {fullSignupDetail.avatar ? (
            <Image
              source={{uri: fullSignupDetail.avatar}}
              style={{width: '100%', height: '100%', borderRadius: 100}}
            />
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 100,
                backgroundColor: colors.text2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome6 name="camera" size={50} color={colors.primary} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default AvatarSectionComponent;
