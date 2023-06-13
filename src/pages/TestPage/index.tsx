import React from 'react'
import {testBoxStyle} from './styles'
import { Box } from '@mui/material'
import { Header } from '../../components/Header'

const TestPage = () => {
  return (
    <>
    <Header headerTheme='light' />
       <Box sx={testBoxStyle}></Box>
    </>

  )
}

export default TestPage
