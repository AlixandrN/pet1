import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import * as sx from "./styles";
import Icon from "../Icon";

type TNavBarItem = {
  path: string;
  title: string;
  iconName: string;
}

export const NavBarItem = ({ iconName, title, path }: TNavBarItem) => {
  return (
    <Box component={NavLink} to={path} sx={sx.navBarItemStyles}>
      <Icon name={iconName} />
      <Typography variant="subtitle8" component="p">{title}</Typography>
    </Box>
  );
};
