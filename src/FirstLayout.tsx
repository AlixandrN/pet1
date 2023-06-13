import React from "react";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const FirstLayout = () => {
  return (
    <Box
      sx={{
        bgcolor: 'grey',
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </Box>
  );
};
