import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {fonts} from '../../enum/fonts';
import useGlobalStore from '../../suppliers/zustand/useGlobalStore';
import SearchBar from 'react-native-search-bar';

const OnBoarding = () => {
  const {colors} = useGlobalStore();
  const searchBar = useRef<SearchBar>(null);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontFamily: fonts.GilroyBold,
          color: colors.text,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Find New Friends 😼
      </Text>
      <SearchBar
        returnKeyType="search"
        autoCorrect
        hideBackground
        ref={searchBar}
        onChangeText={text => {
          // searchBackgroundMusic(text);
        }}
        placeholder="Search Friends"
        tintColor={colors.text}
        barTintColor="transparent"
        onSearchButtonPress={() => {
          Keyboard.dismiss();
        }}
      />
      <FlatList
        data={Array.from({length: 4})}
        renderItem={() => {
          return (
            <View
              style={{
                // backgroundColor: colors.tertiary,
                alignItems: 'center',
                height: 80,
                borderRadius: 18,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <Image
                source={{
                  uri: 'https://yt3.ggpht.com/sJ5nnim_DP_-x-PGzIfAYQ3da8HxxzNDRaP8uR4lRE5VzDmDdvEtCMZXkHkEWN0uEgr_N6YTVw=s176-c-k-c0x00ffffff-no-rj',
                }}
                style={{
                  resizeMode: 'cover',
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                }}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={{flexDirection: 'column', gap: 5, flex: 1}}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 16,
                    fontFamily: fonts.GilroyBold,
                  }}>
                  @testuser
                </Text>
                <Text
                  style={{
                    color: colors.text2,
                    fontSize: 16,
                    fontFamily: fonts.GilroyMedium,
                  }}>
                  Be By Bitch Bae 🙂‍↕️
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 35,
                  borderRadius: 10,
                  backgroundColor: colors.secondary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.GilroyMedium,
                    color: colors.text,
                    fontSize: 16,
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};

export default OnBoarding;
