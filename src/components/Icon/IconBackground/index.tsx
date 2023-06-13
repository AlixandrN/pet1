import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/system';
import { iconBackgroundStyles } from './styles';

type TIconBackgroundProps = {
  children: ReactElement;
};

export const IconBackground: FC<TIconBackgroundProps> = ({ children }) => (
  <Box sx={iconBackgroundStyles}>{children}</Box>
);
