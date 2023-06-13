import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    subtitle5: React.CSSProperties;
    subtitle7: React.CSSProperties;
    subtitle8: React.CSSProperties;
    subtitle9: React.CSSProperties;
    subtitle10: React.CSSProperties;
    subtitle11: React.CSSProperties;
    textlink1: React.CSSProperties;
    textlink2: React.CSSProperties;
    textlink3: React.CSSProperties;
    textlink4: React.CSSProperties;
    textlink5: React.CSSProperties;
    hint: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface PaletteColor {
    bright: string;
    hover: string;
    secondary: string;
    darkGrey: string;
    lightGrey: string;
    accent: string;
    red: string;
    redLight: string;
    green: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    main: string;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    textlink1?: React.CSSProperties;
    textlink2?: React.CSSProperties;
    textlink3?: React.CSSProperties;
    textlink4?: React.CSSProperties;
    textlink5?: React.CSSProperties;
    hint: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
    subtitle7?: React.CSSProperties;
    subtitle8?: React.CSSProperties;
    subtitle9?: React.CSSProperties;
    subtitle10?: React.CSSProperties;
    subtitle11?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    subtitle3: true;
    subtitle5: React.CSSProperties;
    subtitle7: true;
    subtitle8: true;
    subtitle9: true;
    subtitle10: true;
    subtitle11: true;
    textlink1: true;
    textlink2: true;
    textlink3: true;
    textlink4: true;
    textlink5: true;
    hint: true;
    body1: true;
    body2: true;
    body3: true;
  }
}
