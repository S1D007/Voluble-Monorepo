import {create} from 'zustand';
import {
  ColorSchemaEnum,
  darkModeColors,
  lightModeColors,
} from '../../enum/colors';
import {Colors} from '../../types/global.type';

type GlobalState = {
  colorSchema: string;
  setColorSchema: (colorSchema: ColorSchemaEnum) => void;
  colors: Colors;
};

const useGlobalStore = create<GlobalState>(set => ({
  colors: {
    primary: darkModeColors.Primary,
    secondary: darkModeColors.Secondary,
    tertiary: darkModeColors.Tertiary,
    text: darkModeColors.TextColor,
    text2: darkModeColors.TextColo2,
  },
  colorSchema: ColorSchemaEnum.Dark,
  setColorSchema: colorSchema => {
    console.log(colorSchema);
    set({
      colorSchema,
      colors: {
        primary:
          colorSchema === 'light'
            ? lightModeColors.Primary
            : darkModeColors.Primary,
        secondary:
          colorSchema === 'light'
            ? lightModeColors.Secondary
            : darkModeColors.Secondary,
        text:
          colorSchema === 'light'
            ? lightModeColors.TextColor
            : darkModeColors.TextColor,
        text2:
          colorSchema === 'light'
            ? lightModeColors.TextColo2
            : darkModeColors.TextColo2,
        tertiary:
          colorSchema === 'light'
            ? lightModeColors.Tertiary
            : darkModeColors.Tertiary,
      },
    });
  },
}));

export default useGlobalStore;
