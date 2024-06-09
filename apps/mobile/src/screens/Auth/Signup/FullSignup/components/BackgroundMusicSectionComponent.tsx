import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import useGlobalStore from '../../../../../suppliers/zustand/useGlobalStore';
import {fonts} from '../../../../../enum/fonts';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import {TrueSheet} from '@lodev09/react-native-true-sheet';
import BackgroundMusicCardComponent from './BackgroundMusicCardComponent';
import SearchBar from 'react-native-search-bar';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';
import {debounce} from '../../../../../utils/debounce';
import KeyboardHideWrapper from '../../../../../common/wrapper/KeyboardHideWrapper';
import Button from '../../../../../common/components/Button';
import SoundPlayer from 'react-native-sound-player';
const BackgroundMusicSectionComponent = () => {
  const {colors} = useGlobalStore();
  const {
    searchBackgroundMusic,
    backgroundMusics,
    loading,
    currentBackgroundMusic,
  } = useAuthStore();
  const sheet = useRef<TrueSheet>(null);
  const searchBar = useRef<SearchBar>(null);

  useEffect(() => {
    if (currentBackgroundMusic.songUrl) {
      SoundPlayer.playUrl(currentBackgroundMusic.songUrl);
    }
    return () => {
      if (currentBackgroundMusic.songUrl) {
        SoundPlayer.stop();
      }
    };
  }, [currentBackgroundMusic]);

  const present = async () => {
    await sheet.current?.present();
  };

  const dismiss = async () => {
    await sheet.current?.dismiss();
  };

  return (
    <React.Fragment>
      <TextContentsComponent
        title="Jane meri janeman. 🎵"
        subtitle="This background music will be played when your profile is viewed by others, so that you look cool. 😎"
      />
      <KeyboardHideWrapper>
        <TrueSheet
          style={{
            // backgroundColor: colors.primary,
            padding: 10,
            paddingTop: 50,
            // opacity: 0.9,
          }}
          ref={sheet}
          sizes={['large']}
          cornerRadius={24}
          backgroundColor={colors.primary}
          blurTint="dark">
          <Text
            style={{
              color: colors.text,
              fontSize: 26,
              fontFamily: fonts.GilroyBold,
              alignSelf: 'center',
              // marginBottom: 40,
            }}>
            Select a background music
          </Text>
          <SearchBar
            returnKeyType="search"
            autoCorrect
            hideBackground
            ref={searchBar}
            onChangeText={text => {
              searchBackgroundMusic(text);
            }}
            placeholder="Search Music"
            tintColor={colors.text}
            barTintColor="transparent"
            onSearchButtonPress={() => {
              Keyboard.dismiss();
            }}
          />
          {loading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              data={backgroundMusics}
              renderItem={({index, item}) => {
                return (
                  <BackgroundMusicCardComponent {...item} dismiss={dismiss} />
                );
              }}
              contentContainerStyle={{
                paddingBottom: 100,
              }}
              // style={{
              //   paddingBottom:100
              // }}
              keyExtractor={(_, i) => i.toString()}
            />
          )}
        </TrueSheet>
      </KeyboardHideWrapper>
      {currentBackgroundMusic.songUrl ? (
        <TouchableOpacity
          onPress={present}
          activeOpacity={0.8}
          style={{
            width: '100%',
            backgroundColor: colors.tertiary,
            borderRadius: 100,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            source={{
              uri: currentBackgroundMusic.image,
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
              }}>
              {currentBackgroundMusic.name}
            </Text>
            <Text
              style={{
                color: colors.text2,
                fontSize: 16,
                fontFamily: fonts.GilroyMedium,
              }}>
              By {currentBackgroundMusic.singer}
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
      ) : (
        <View
          style={{
            width: '100%',
            height: 50,
          }}>
          <Button title="Select Background Music" onPress={present} />
        </View>
      )}
    </React.Fragment>
  );
};

export default BackgroundMusicSectionComponent;
