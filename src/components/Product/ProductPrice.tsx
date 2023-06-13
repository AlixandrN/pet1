import { Card, Typography } from "@mui/material";
import { FC } from "react";

type TProductPriceType = {
  price: number;
};

const priceStyle = {
  color: "red",
  // bgcolor: 'inherit'
};

export const ProductPrice: FC<TProductPriceType> = ({ price }) => {
  return (
    <Card sx={priceStyle}>
      <Typography sx={{ fontSize: 24 }}>{price} $</Typography>
    </Card>
  );
};
