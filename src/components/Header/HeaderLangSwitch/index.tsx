import { FC } from "react";
import Switch from "@mui/material/Switch";
import { Typography, Box } from "@mui/material";
import { langItemStyle, switchBoxStyle } from "./styles";
import { useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import {
  changeLang,
  getCurrentLang,
} from "../../../store/reducers/languageSlice";
import { theme } from "../../../theme";

type THeaderLangSwitchTypes = {
  headerTheme: string;
};

export const HeaderLangSwitch: FC<THeaderLangSwitchTypes> = ({
  headerTheme,
}) => {
  const dispatch = useAppDispatch();
  const isEng = useSelector(getCurrentLang);

  const handleChange = () => {
    dispatch(changeLang());
  };

  return (
      <Box sx={switchBoxStyle}>
        <Typography
          sx={{
            ...langItemStyle,
            color:
              headerTheme === "dark"
                ? isEng
                  ? theme.palette.primary.darkGrey
                  : theme.palette.primary.main
                : isEng
                ? theme.palette.primary.redLight
                : theme.palette.primary.red,
          }}
        >
          Ru
        </Typography>
        <Switch checked={isEng} onChange={handleChange} />
        <Typography
          sx={{
            ...langItemStyle,
            color:
              headerTheme === "dark"
                ? isEng
                  ? theme.palette.primary.main
                  : theme.palette.primary.darkGrey
                : isEng
                ? theme.palette.primary.red
                : theme.palette.primary.redLight,
          }}
        >
          En
        </Typography>
      </Box>
  );
};
