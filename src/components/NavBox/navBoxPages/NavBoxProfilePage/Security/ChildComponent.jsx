import React from 'react'

const ChildComponent = ({cb}) => {
    console.log('was rendered childComponent')
  return (
    <>
    <div>ChildComponent</div>
    <button onClick={cb} > push </button>
    </>
    
  )
}

export default React.memo(ChildComponent)
