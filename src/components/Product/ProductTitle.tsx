import { Card, Typography } from "@mui/material";
import { FC } from "react";

type TProductTitleType = {
  title: string;
};

const titleStyle = {
  color: "black",
  bgcolor: 'inherit'
};

export const ProductTitle: FC<TProductTitleType> = ({ title }) => {
  return (
    <Card sx={titleStyle}>
      <Typography sx={{ fontSize: 24 }}>{title}</Typography>
    </Card>
  );
};
