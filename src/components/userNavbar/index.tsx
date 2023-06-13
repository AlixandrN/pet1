import { FC } from "react";
import { Box } from "@mui/material";
import { NavBarItem } from "./NavBarItem";
import { navBarLinks } from "./navBarLinks";
import * as sx from "./styles";
import { UserNavBarLogoutButton } from "./UserNavBarLogoutBtn";
import { getLang } from "../../constants";
import { useSelector } from "react-redux";
import { getCurrentLang } from "../../store/reducers/languageSlice";

export const UserNavBar: FC = () => {
  const isEng = useSelector(getCurrentLang);
  return (
    <>
      <Box sx={sx.navBarContainerStyles}>
        <Box sx={sx.navBarStyles}>
          {navBarLinks.map((item, index) => (
            <NavBarItem
              key={index}
              iconName={item.iconName}
              title={getLang(item.title, isEng)}
              path={item.path}
            />
          ))}
        </Box>

        <UserNavBarLogoutButton title={getLang("exit", isEng)} />
      </Box>
    </>
  );
};
