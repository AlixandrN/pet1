import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { memberPageStyles } from "./styles";
import { useSelector } from "react-redux";
import { getAccountStatus, logIn } from "../../store/reducers/accountSlice";
import { Header } from "../../components/Header";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { InputPassword } from "../../components/InputPassword";

const showUsers = () => {
  fetch("https://643e8178c72fda4a0bf87f06.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("USERS: ", data);
    });
};

const addUser = () => {
  const user = {
    login: "Bill",
    password: "888",
    orders: ["book"],
  };

  fetch("https://643e8178c72fda4a0bf87f06.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("NEW USER: ", data);
    });
};

const deleteUser = () => {
  fetch("https://643e8178c72fda4a0bf87f06.mockapi.io/users/6", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("del USER: ", data);
    });
};

const LoginPage = () => {
  const navigate = useNavigate();
  const hasAccess = useSelector(getAccountStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    hasAccess && navigate("/navbar");
  });

  return (
    <>
      <Header headerTheme="light" />
      <Box sx={memberPageStyles}>
        <div>MemberPage</div>

        <button onClick={showUsers}>show users</button>
        <button onClick={addUser}>add user</button>
        <button onClick={deleteUser}>delete user</button>

        {!hasAccess && (
          <>
            <Typography> Зарегистрироваться </Typography>

            <button
              onClick={() => {
                dispatch(logIn("Sasha"));
              }}
            >
              dispatch Sasha
            </button>
          </>
        )}

<InputPassword />
      </Box>

          

    </>
  );
};

export default LoginPage;
