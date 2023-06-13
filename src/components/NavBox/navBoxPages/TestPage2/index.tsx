import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import * as sx from './styles';

export const TestPage2 = () => {
    const {id} = useParams();
    const lacation = useLocation()
   console.log('lacation-pathname', lacation.pathname )

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
   console.log('event:', event.target.name)
    
  };





  return (
    <div>
        TestPage {id}
        <FormControl component='fieldset' variant='standard'>
          <FormGroup sx={sx.switchBoxStyles}>
            <FormControlLabel
            sx={sx.aa}
              control={
                <Switch checked={true} onChange={handleChange} name='email' />
              }
             
              label='E-mail рассылка'
              labelPlacement='start'
            />
            <FormControlLabel
            sx={sx.aa}
              control={<Switch checked={true} onChange={handleChange} name='sms' />}
              label='SMS-уведомления'
              labelPlacement='start'
            />
            <FormControlLabel
            sx={sx.aa}
              control={
                <Switch checked={true} onChange={handleChange} name='push' />
              }
              label='PUSH-уведомелния'
              labelPlacement='start'
            />
          </FormGroup>
        </FormControl>
        
    </div>
  )
}
