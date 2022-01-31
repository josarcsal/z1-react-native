import { useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';

export const colors = {
  alabaster: '#faf9f9',
  alabaster50: 'rgba(250, 249, 249, 0.5)',
  aquamarine: '#77dbe5',
  aquamarine20: 'rgba(119,219,229,0.2)',
  azerac: '#fff5e2',
  black: '#1e1210',
  black40: '#00000040',
  bossanova: '#5f306e',
  bossanova50: 'rgba(95, 48, 110, 0.5);',
  bossanova80: 'rgba(95, 48, 110, 0.8);',
  bossanova90: 'rgba(95, 48, 110, 0.9);',
  bridal: '#fffbf3',
  cararra: '#f5f5f2',
  carrara10: 'rgba(245, 245, 242, 0.10)',
  carrara12: 'rgba(245, 245, 242, 0.12)',
  carrara20: 'rgba(245, 245, 242, 0.2)',
  carrara30: 'rgba(245, 245, 242, 0.3)',
  carrara50: 'rgba(245, 245, 242, 0.5)',
  carrara80: 'rgba(245, 245, 242, 0.8)',
  chablis: '#fff4f4',
  cloud: '#c2c0bd',
  dandelion: '#ffdc64',
  dark: ' #1f1b24',
  delta: '#a8a7a4',
  desert: '#f1f1ef',
  desert10: 'rgba(241, 241, 239, 0.1)',
  eastern: '#249fbc',
  eastSide: '#B479C2',
  eastSide20: 'rgba(180,121,194,0.2)',
  eastSide50: 'rgba(180,121,194,0.5)',
  ebb: '#eae8e6',
  flamingo: '#f25d40',
  geraldine: '#fc8077',
  grape: '#421b5d',
  grape50: '#421b5d50',
  haiti: '#261036',
  haiti70: '#261036B3',
  haiti90: '#261036DD',
  jagger: '#300e4e',
  matisse: '#19778D',
  matisse20: 'rgba(25,119,141,0.2)',
  mint: '#c9f1f5',
  peach: '#ffe6b4',
  pippin: '#ffe4e4',
  polar: '#eaf9fb',
  polar20: 'rgba(234,249,251,0.2)',
  red: '#f24052',
  salmon: '#ffbbbb',
  scooter: '#3ec0d6',
  sin: '#ffb928',
  transparent: 'transparent',
  westar: '#dcdad7',
  white: '#ffffff',
  white5: '#ffffff0D',
  white10: '#ffffff1A',
  white20: '#ffffff33',
  white50: '#ffffff80',
  white60: '#ffffff99',
  white70: '#ffffff70',
  white80: '#ffffffcc',
  white90: '#ffffff90',
  lessonPurple: '#60306f',
  lessonYellow: '#fddb6f',
  purpleCat: '#593c71',
  purpleIcon: '#4E4D93',
  lightPurpleCat: '#b77ac4',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
