import { Shadows } from '@mui/material';

export enum ShadowsArray {
  none = 0,
  boxes = 1,
  components = 2
}

export const shadows = [
  'none',
  '0px 8px 24px rgba(80, 99, 108, 0.08)',
  '0px 2px 6px rgba(0, 0, 0, 0.08), 0px 5px 50px rgba(0, 0, 0, 0.25)',
  ...new Array(22).fill('')
] as Shadows;
