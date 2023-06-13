import { FC, useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { logoIconStyles, logoStyles } from "./styles";
import { LogoName } from "./LogoName";
import BurgerIcon from "../../icons/BurgerIcon";

type THeaderLogoProps = {
  headerTheme: string;
};

export const HeaderLogo: FC<THeaderLogoProps> = ({ headerTheme }) => {
  const [isLogoNameShown, setIsLogoNameShown] = useState(false);
  const toggleLogoNameVisibility = () =>
    setIsLogoNameShown((visible) => !visible);
  return (
    <Box>
      <Link style={{ textDecoration: "none" }} to="/">
        <Box
          sx={logoStyles}
          onMouseEnter={toggleLogoNameVisibility}
          onMouseLeave={toggleLogoNameVisibility}
        >
          <Box sx={logoIconStyles}>
            <BurgerIcon theme={headerTheme} />
          </Box>
          <LogoName isShown={isLogoNameShown} headerTheme={headerTheme} />
        </Box>
      </Link>
    </Box>
  );
};
