import { Typography } from "@mui/material";
import { FC } from "react";
import { theme } from "../../../../theme";

type TTextNavLinkTypes = {
  headerTheme: string;
  children: string;
};

const textStyle = {
  transition: "0.3s linear",
  "&:hover": {
    boxShadow: `0 1px 0 0 ${theme.palette.primary.darkGrey}`,
  },
};

export const TextNavLink: FC<TTextNavLinkTypes> = ({
  headerTheme,
  children,
}) => {
  return (
    <Typography
      sx={{
        color:
          headerTheme === "dark"
            ? theme.palette.primary.main
            : theme.palette.primary.red,
        ...textStyle,
      }}
    >
      {children}
    </Typography>
  );
};
