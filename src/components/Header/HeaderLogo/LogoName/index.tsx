import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { logoNameAppearance, logoNameStyles } from "./styles";
import { palette } from "../../../../theme/palette";
import { useSelector } from "react-redux";
import { getCurrentLang } from "../../../../store/reducers/languageSlice";
import { getLang } from "../../../../constants";

type TLogoNameTypes = {
  isShown: boolean;
  headerTheme: string;
};

export const LogoName: FC<TLogoNameTypes> = ({ isShown, headerTheme }) => {
  const isEnglish = useSelector(getCurrentLang);
  return (
    <Box
      sx={{
        opacity: isShown ? "1" : "0",
        animation: isShown ? logoNameAppearance : "",
        color:
          headerTheme === "light"
            ? palette.primary.redLight
            : palette.primary.main,
        ...logoNameStyles,
      }}
    >
      <Typography> {getLang("logoName", isEnglish)} </Typography>
    </Box>
  );
};
