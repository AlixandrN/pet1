import { FC } from "react";
import { Typography, Box, IconButton, Avatar } from "@mui/material";

import {
  circleStyle,
  additionalBtnStyle,
  avatarStyle,
  textStyle,
  labelWrapStyle,
  productWrapStyle,
} from "./style";
import Icon from "../Icon";

type TProductViewType = {
  imageName: string;
  buyItem(): void;
  showItemDetails(): void;
};

export const ProductView: FC<TProductViewType> = ({
  imageName,
  buyItem,
  showItemDetails,
}) => {
  return (
    <Box sx={productWrapStyle}>
      <Box sx={circleStyle}>
        <Avatar sx={avatarStyle} src={require(`../../assets/${imageName}.png`)}>
          <Icon name="BurgerIcon" />
        </Avatar>

        <Box sx={labelWrapStyle}>
          <div className="blackout"></div>

          <IconButton
            className="btn"
            disableRipple
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={showItemDetails}
          >
            <Icon name="CameraIcon" />
          </IconButton>
        </Box>

        <Box sx={additionalBtnStyle}>
          <IconButton
            disableRipple
            aria-label="upload picture"
            component="span"
            onClick={buyItem}
          >
            <Typography sx={textStyle}>+</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
