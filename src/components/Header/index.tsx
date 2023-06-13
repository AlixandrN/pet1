import { FC } from "react";
import { Box } from "@mui/system";
import { HeaderNav } from "./HeaderNav";
import { HeaderLogo } from "./HeaderLogo";
import { headerStyles, headerShadowStyles } from "./styles";
import { palette } from "../../theme/palette";
import { HeaderLangSwitch } from "./HeaderLangSwitch";

type THeaderPropsTypes = {
  headerTheme: string;
};

export const Header: FC<THeaderPropsTypes> = ({ headerTheme }) => {
  return (
    <Box
      component="header"
      sx={{
        ...headerStyles,
        backgroundColor:
          headerTheme === "light" ? palette.common.white : palette.common.black,
        boxShadow: headerTheme === "light" ? "" : headerShadowStyles,
      }}
    >
      <HeaderLogo headerTheme={headerTheme} />
      <HeaderNav headerTheme={headerTheme} />
      <HeaderLangSwitch headerTheme={headerTheme}/>
    </Box>
  );
};
