import { yellow, red, green, grey, common } from '@mui/material/colors';

export const palette = {
  primary: {
    main: yellow.A700,
    light: yellow[300],
    red: red.A700,
    redLight: red[100],
    accent: '#f7cd60',
    hover: '#edc700',
    darkGrey: '#50636C',
    lightGrey: '#E8EEF1',
    green: green[400],
  },
  common: {
    white: common.white,
    black: common.black
  },
  secondary: {
    main: grey[300],
    light: grey[200],
    hover: grey[400],
    dark: grey[700]
  },
  text: {
    primary: '#212529',
    disabled: grey[500],
    main: grey[700],
    secondary: '#7a7a7a',
    activeStatus: '#349237',
    closedStatus: '#F2453D'
  },
  error: {
    main: '#f2453d'
  },
  info: {
    main: '#4054B2',
    secondary: '#FFBB33'
  },
  success: {
    main: '#4CAF50'
  }
};
