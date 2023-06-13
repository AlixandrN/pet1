import { FC } from "react";
import { Card } from "@mui/material";

import { cardStyle } from "./style";
import { TProductTypes } from "../../pages/MainPage";
import { ProductDescription } from "./ProductDescription";
import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { ProductView } from "./ProductView";

export const Product: FC<TProductTypes> = ({
  title,
  imageName,
  price,
  description,
}) => {
  const buyItem = () => {
    console.log("The item was bought");
  };

  const showItemDetails = () => {
    console.log("show modal window");
  };

  return (
    <Card sx={cardStyle}>
      <ProductTitle title={title} />
      <ProductView
        imageName={imageName}
        buyItem={buyItem}
        showItemDetails={showItemDetails}
      />
      <ProductPrice price={price} />
      <ProductDescription description={description} />
    </Card>
  );
};
