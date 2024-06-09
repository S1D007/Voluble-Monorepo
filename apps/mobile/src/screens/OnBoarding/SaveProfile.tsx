import {
  View,
  Text,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';
import Button from '../../common/components/Button';
import RNFS from 'react-native-fs';
const SaveProfile = () => {
  const {colors} = useGlobalStore();

  const saveCreds = async () => {
    const path = RNFS.DocumentDirectoryPath + '/creds3.json';
    const creds = [
      {
        username: 'siddhant.764',
        password: 'password',
      },
    ];
    const data = JSON.stringify(creds, null, 2);
    try {
      const alreadyPresentContent = await RNFS.readFile(path);
      console.log(alreadyPresentContent);
      if (alreadyPresentContent) {
        return;
      }
      const response = await RNFS.writeFile(path, data, 'utf8');
    } catch (error) {
      const response = await RNFS.writeFile(path, data, 'utf8');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20,
        // paddingTop: 50,
        justifyContent: 'center',
        gap: 20,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontFamily: fonts.GilroyBold,
          color: colors.text,
        }}>
        Lessssss go.... 🚀
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          fontFamily: fonts.GilroyMedium,
          color: colors.text2,
        }}>
        Save this Profile, This would allow you to access app without login agin
        and again.
      </Text>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
          // borderStyle: 'dashed',
          borderWidth: 6,
          borderColor: colors.secondary,
          elevation: 10,
        }}>
        <Image
          source={{
            uri: 'https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg',
          }}
          style={{width: '100%', height: '100%', borderRadius: 100}}
        />
      </View>
      <Button
        title="Save Profile to Phone"
        onPress={() => {
          saveCreds();
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.GilroyMedium,
            color: colors.text2,
          }}>
          Skip this step
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveProfile;
