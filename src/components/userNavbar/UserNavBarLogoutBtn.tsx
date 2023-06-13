import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { navBarItemStyles } from "./styles";
import { ExitIcon } from "../navBarIcons/ExitIcon";
import { useAppDispatch } from "../../store";
import { logOut } from "../../store/reducers/accountSlice";

interface INavBarLogoutButton {
  title: string;
}

export const UserNavBarLogoutButton = ({ title }: INavBarLogoutButton) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Box sx={navBarItemStyles} onClick={handleClick}>
      <ExitIcon />
      <Typography variant="subtitle8" component="p">
        {title}
      </Typography>
    </Box>
  );
};
