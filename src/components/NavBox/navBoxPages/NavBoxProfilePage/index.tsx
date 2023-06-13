import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { Tabber } from "../../../Tabber";

import { tabStyles, contentContainerStyles, tabPanelStyles } from "./style";
import { GeneralInfo } from "./GeneralInfo";
import { Security } from "./Security";

export const NavBoxProfilePage = () => {
  const tabs = useMemo(() => {
    return [
      {
        title: "GeneralInfo",
        content: <GeneralInfo /> ,
      },
      {
        title: "Безопасность",
        content: <Security />,
      },
      {
        title: "Уведомления",
        content: "<Notifications />",
      },
    ];
  }, []);

  return (
    
      <Box sx={contentContainerStyles}>
        <Box sx={tabPanelStyles}>
          <Tabber tabs={tabs} tabStyles={tabStyles} />
        </Box>
        <Typography>AccountPageFooter</Typography>
      </Box>
    
  );
};
