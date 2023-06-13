import { FC, SVGProps } from "react";
import { Box } from "@mui/system";
import { HeaderNavLink } from "./HeaderNavLink";
import { headerNavBoxStyles } from "./styles";

import { LocationIcon } from "../../icons/LocationIcon";
import { CurrencyIcon } from "../../icons/CurrencyIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { AccountIcon } from "../../icons/AccountIcon";

import { useSelector } from "react-redux";
import {
  getAccountStatus,
  getAccountUserName,
} from "../../../store/reducers/accountSlice";
import { getCurrentLang } from "../../../store/reducers/languageSlice";
import { getLang } from "../../../constants";

type TNavIconPropsTypes = {
  props?: SVGProps<SVGSVGElement>;
  theme: string;
};

type THeaderNavContentTypes = {
  path: string;
  name: string;
  icon: FC<TNavIconPropsTypes>;
};

type THeaderNavTypes = {
  headerTheme: string;
};

export const HeaderNav: FC<THeaderNavTypes> = ({ headerTheme }) => {
  const currentUserName = useSelector(getAccountUserName);
  const hasAccess = useSelector(getAccountStatus);
  const isEnglish = useSelector(getCurrentLang);

  const headerNavContent: THeaderNavContentTypes[] = [
    {
      path: "locationPage",
      name: getLang("locations", isEnglish),
      icon: LocationIcon,
    },
    {
      path: "testPage",
      name: getLang("test", isEnglish),
      icon: CurrencyIcon,
    },
    {
      path: "login",
      name: getLang("sign_in", isEnglish),
      icon: PhoneIcon,
    },
    {
      path: "navbar", // user settingsPage
      name: `${currentUserName}`,
      icon: AccountIcon,
    },
  ];

  const arr = [headerNavContent[3]];

  const statusHeaderNavContent = hasAccess
    ? headerNavContent.splice(0, 2).concat(arr)
    : headerNavContent.slice(0, 3);

  return (
    <Box component="nav" sx={headerNavBoxStyles}>
      {statusHeaderNavContent.map((item) => {
        const NavIcon = item.icon;
        return (
          <HeaderNavLink to={item.path} name={item.name} key={item.name} headerTheme={headerTheme}>
            <NavIcon theme={headerTheme} />
          </HeaderNavLink>
        );
      })}
    </Box>
  );
};
