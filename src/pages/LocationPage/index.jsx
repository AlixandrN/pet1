import React, { useEffect, useState } from "react";
import { locationBoxStyle } from "./styles";
import { Box } from "@mui/material";
import CameraIcon from "../../components/icons/CameraIcon";
import Icon from "../../components/Icon";
import { Header } from "../../components/Header";


// const ChieldComponent = ({f, arr}) => {
//   const [a, setA] = useState([]);
//   const [c, setC] = useState([]);

// const mySort = () => {
//   console.log('myArr: ')
//   setA(arr)
//   setC(a.concat(44))
// }

//   useEffect(()=>{
//     mySort()
//   }, [mySort] )

  
//   return (
//     <>
//     ChieldComponent:
//     <button onClick={f} >click me</button>
//     </>
//   )
// }

const LocationPage = () => {
  // const [a, setA] = useState(2);
  // const someFunk = () =>console.log('clicked');
  // const ar = [3,10,35]

  // useEffect(()=>{
  //   console.log('hi')
  // })

  return (
    <>
    <Header headerTheme='light' />
      <Box sx={locationBoxStyle}>LocationPage</Box>
      {/* <ChieldComponent f={someFunk} arr={ar} /> */}
      {/* <CameraIcon />
      <Icon name='PhoneIcon' />
      <Icon name='CameraIcon' /> */}
    </>
    

  );
};
export default LocationPage