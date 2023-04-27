import React from 'react'
import vector from '../assets/vector.png'



function Vector() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
        left: 90,
        
      }}>


  <img src={vector}  className='App-vector' alt="vector" class='çenter' />
 
    </div>
  
  )
}

export default Vector