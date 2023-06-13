import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAccountStatus } from "../../store/reducers/accountSlice";
import { MainPageLayout } from "../MainPageLayout";
import { mainPageStyles, mainPageContainerStyles } from "./styles";
import { Product } from "../../components/Product";


export type TProductTypes = {
  title: string;
  imageName: string;
  price: number;
  description: string;
}

const PRODUCTS: Array<TProductTypes> = [
  { title: "meal_1", imageName: "meal_01", price: 5, description: 'Lorem ipsum dolor sit amet.' },
  { title: "meal_2", imageName: "meal_02", price: 10, description: 'Lorem ipsum dolor sit amet.' },
  { title: "meal_3", imageName: "meal_03", price: 15, description: 'Lorem ipsum dolor sit amet.' },
  { title: "meal_4", imageName: "meal_04", price: 20, description: 'Lorem ipsum dolor sit amet.' },
];

export const MainPage = () => {
  const navigate = useNavigate();
  const hasAccess = useSelector(getAccountStatus);

  return (
    <MainPageLayout>
      {/* <Slider /> */}
      <Box sx={mainPageContainerStyles}>
        <Box sx={mainPageStyles}>
          {PRODUCTS.map(item => (
            <Product 
            title={item.title} 
            imageName={item.imageName} 
            price={item.price}
            description={item.description}
            />
          )  )}
        </Box>
      </Box>
      {/* <BankInfoSection /> */}
    </MainPageLayout>
  );
};
