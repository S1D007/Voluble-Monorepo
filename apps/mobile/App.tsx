import {StatusBar, Platform} from 'react-native';
import React, {useEffect} from 'react';
import SafeAreaScreenWrapper from './src/common/wrapper/SafeAreaScreenWrapper';
import {Appearance, useColorScheme} from 'react-native';
import useGlobalStore from './src/suppliers/zustand/useGlobalStore';
import {ColorSchemaEnum} from './src/enum/colors';
import Auth from './src/screens/Auth/Auth';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
const App = () => {
  const {setColorSchema, colors, colorSchema} = useGlobalStore();
  const deviceColorScheme = useColorScheme();
  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      const schema =
        colorScheme === 'light' ? ColorSchemaEnum.Light : ColorSchemaEnum.Dark;
      setColorSchema(schema);
    });
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary);
    }
  }, []);

  return (
    <SafeAreaScreenWrapper>
      {/* <Auth /> */}
      <OnBoarding />
    </SafeAreaScreenWrapper>
  );
};

export default App;
