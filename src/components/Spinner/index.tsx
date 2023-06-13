import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

import * as s from "./styles";

export const Spinner = () => (
  <Box sx={s.spinnerWrapperStyles}>
    <CircularProgress color="secondary" size={65} sx={s.spinnerStyles} />
  </Box>
);
