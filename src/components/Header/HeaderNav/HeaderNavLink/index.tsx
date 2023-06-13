import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import { headerLinkStyles, linkStyles } from './styles';
import { TextNavLink } from './TextNavLink';

type THeaderNavLinkPropTypes = {
  to: string;
  name: string;
  children: React.ReactElement;
  headerTheme: string;
};

export const HeaderNavLink: FC<THeaderNavLinkPropTypes> = ({ to, children, name, headerTheme }) => {
  return (
    <Link component={NavLink} to={`/${to}`} underline='none' sx={headerLinkStyles}>
      <Box sx={linkStyles}>
        {children}
        <TextNavLink  headerTheme={headerTheme}>{name}</TextNavLink>
      </Box>
    </Link>
  );
};
