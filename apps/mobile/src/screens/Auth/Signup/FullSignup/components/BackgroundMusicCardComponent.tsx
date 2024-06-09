import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useGlobalStore from '../../../../../suppliers/zustand/useGlobalStore';
import {fonts} from '../../../../../enum/fonts';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import useAuthStore, {
  BackgroundMusic,
} from '../../../../../suppliers/zustand/useAuthStore';

type BackgroundMusicCardComponentProps = {
  dismiss: () => void;
} & BackgroundMusic;

const BackgroundMusicCardComponent: React.FC<
  BackgroundMusicCardComponentProps
> = ({dismiss, copyright, image, name, songUrl, singer, id}) => {
  const {colors} = useGlobalStore();
  const {setCurrentBackgroundMusic} = useAuthStore();
  return (
    <TouchableOpacity
      onPress={() => {
        dismiss();
        setCurrentBackgroundMusic({
          copyright,
          image,
          name,
          songUrl,
          singer,
          id,
        });
      }}
      activeOpacity={0.8}
      style={{
        width: '100%',
        // backgroundColor: colors.tertiary,
        borderRadius: 16,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
      }}>
      <Image
        source={{
          uri:
            image ||
            'https://c.saavncdn.com/259/Humnava-Mere-Hindi-2018-20180522-500x500.jpg',
        }}
        style={{
          resizeMode: 'cover',
          width: 50,
          height: 50,
          borderRadius: 100,
        }}
      />
      <View style={{flexDirection: 'column', gap: 5, flex: 1}}>
        <Text
          style={{
            color: colors.text,
            fontSize: 16,
            fontFamily: fonts.GilroyBold,
          }}
          numberOfLines={1}
          ellipsizeMode="tail">
          {name}
        </Text>
        <Text
          style={{
            color: colors.text2,
            fontSize: 16,
            fontFamily: fonts.GilroyMedium,
          }}
          numberOfLines={1}
          ellipsizeMode="tail">
          By {singer}
        </Text>
      </View>
      <FontAwesome6
        name="music"
        size={30}
        style={{
          marginRight: 10,
        }}
        color={colors.text2}
      />
    </TouchableOpacity>
  );
};

export default BackgroundMusicCardComponent;
