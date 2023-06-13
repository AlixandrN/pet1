import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router';
import * as sx from "../../styles";
import { useSelector } from 'react-redux';
import { getAccountStatus} from "../../../../store/reducers/accountSlice";


const heandleClick = (a:string) => {
    console.log('click', a);
    // navigate(`/account/deposits/order/${data.number}`);
}

export const NavBoxDefaultPage = () => {
  const hasAccess = useSelector(getAccountStatus)
    const navigate = useNavigate();
  return (
    <Box sx={sx.navBoxDefaultPageStyle} >
        <Typography>NavBoxDefaultPage</Typography>
        <button onClick={()=>console.log('hasAccess: ', hasAccess)} >show hasAccess</button>
        {/* <Button onClick={()=> heandleClick('01') } >id-01</Button>
        <Button onClick={()=> heandleClick('02') } >id-02</Button> */}
      
    </Box>
  
  )
}
