import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import CenterItemsWrapper from '../../common/wrapper/CenterItemsWrapper';
import Logo from '../../common/components/Logo';
import FooterComponent from './components/FooterComponent';
import Login from './Login';
import Signup from './Signup';
import SoundPlayer from 'react-native-sound-player';

const Auth = () => {
  useEffect(() => {
    const _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
      },
    );
    const _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    const _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingFile',
      ({success, name, type}) => {
        console.log('finished loading file', success, name, type);
      },
    );
    const _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {
        console.log('finished loading url', success, url);
      },
    );
    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
      _onFinishedLoadingURLSubscription.remove();
      _onFinishedLoadingFileSubscription.remove();
    };
  }, []);
  return (
    <CenterItemsWrapper>
      <Logo />
      {/* <Login /> */}
      <Signup />
      <FooterComponent />
    </CenterItemsWrapper>
  );
};

export default Auth;
