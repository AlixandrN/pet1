import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router';
import * as sx from "../../styles";


const arrayOfNumbers: Array<number> = [0,2,4,6]
const arrayOfStrings: Array<string> = ['a', 'b', 'c']

function reverse<T> (arr: Array<T> ): T[] {
  return arr.reverse()
}

export const NavBoxFirstPage = () => {
    const navigate = useNavigate();
    const heandleClick = (a:string) => {navigate(`${a}`); }

    const test = () => {console.log(reverse(arrayOfNumbers))}

  return (
    <Box sx={sx.navBoxDefaultPageStyle} >
         <div>NavBoxFirstPage</div>

        <Button onClick={()=> heandleClick('01') } >id-01</Button>
        <Button onClick={()=> heandleClick('02') } >id-02</Button>
        <Button onClick={()=> test() } >test</Button>
      
    </Box>


   
  )
}
