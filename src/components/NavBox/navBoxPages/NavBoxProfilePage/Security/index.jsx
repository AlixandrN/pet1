import { Button, Card } from '@mui/material'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import ChildComponent  from './ChildComponent';


export const  Security = () => {
  const [state, setState] = useState('');
  const ref = useRef(null)

// useEffect(()=>{
//   const id = ref.current
// })

  const onClickForm = (e) => {
    e.preventDefault()
    console.log("controlled: ", state );
    console.log("uncontrolled: ", ref.current.value );
    setState('');
  };

  const cb = (e) => {
    setState(e.target.value)
  }

  return (
    <form onClick={onClickForm}>
      <input placeholder="controlled" value={state} onChange={event => cb(event)} />
      <input placeholder="uncontrolled" ref={ref} />

      <button>Отправить заявку на кредит</button>
    </form>
  );




  };
  



{/* <ChildComponent cb={push} /> */}