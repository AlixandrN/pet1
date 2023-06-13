import React, { FC } from 'react';
import Box from '@mui/material/Box';

type TTabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export const TabPanel: FC<TTabPanelProps> = ({ children, value, index, ...props }) => (
  <Box
    role='tabpanel'
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...props}>
    {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
  </Box>
);
