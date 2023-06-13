import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/system";
import { Header } from "../../components/Header";

const mainPageLayoutStyles = {
  position: "relative",
  height: "100vh",
  bgcolor: '#000',
  width: "100%",
  overflowX: "hidden",
};

const headerBoxStyles = {
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "1000",
  overflowX: "hidden",
};

export const MainPageLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box sx={mainPageLayoutStyles}>
    <Box sx={headerBoxStyles}> <Header headerTheme="dark" /> </Box>
    {children}
  </Box>
);
