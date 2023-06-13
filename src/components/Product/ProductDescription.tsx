import { Card, CardContent, Typography } from '@mui/material'
import {FC} from 'react'

type TProductDescriptionType = {
    description: string
}

const descriptionStyle = {
    color: 'red',
    // bgcolor: 'inherit'
}
 
export const ProductDescription: FC<TProductDescriptionType> = ( {description} ) => {
  return (
    <Card sx={{ minWidth: '50%' }}>
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {description}
        </Typography>
    </CardContent>
    
</Card>
  )
}
