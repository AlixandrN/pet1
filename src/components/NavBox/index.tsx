import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getAccountStatus } from "../../store/reducers/accountSlice";
import { UserNavBar } from "../userNavbar";
import { navBoxStyle } from "./styles";

export const NavBox = () => {
  const navigate = useNavigate();
  const hasAccess = useSelector(getAccountStatus);

  useEffect(() => {
    !hasAccess && navigate("/login");
  });

  return (
    <>
      <Header headerTheme="light" />
      <Box sx={navBoxStyle}>
        <UserNavBar />
        <Outlet />
      </Box>
    </>
  );
};
