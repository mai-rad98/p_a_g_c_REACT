import React from 'react'
import ellipse12 from '../assets/ellipse12.png'

function Hero1() {
  return (
    <div style={{
        position: 'relative',
        left: 358,
        width: 200,
        height:200,
        margin: 20


    }}>
      
      <div  style={{
        position: 'absolute',
        left: -900,
        fontWeight: 'bold',
        fontSize: 50,
        color:'#B28612'
      }}> VISION</div>

        <p style={{
          position:'absolute',
           left: -900,
           bottom: 10,
          fontSize: 20,

        }}>A GLOBAL MOVEMENT FOR YOUNG AFRICAN WOMEN</p>
        <p style={{
          position:'absolute',
           left: -900,
           bottom: -10,
          fontSize: 20,

        }}>AND MEN ON A QUEST TO CHANGE AFRICA & THE WORLD AT LARGE.</p>      
          
      
            
            <div style={{
            position: 'relative',
            width: 325,
            height: 325,
            borderRadius: 200,
            backgroundColor: '#E4B846',
            bottom: 27,

            
        }}>
        <img src={ellipse12} alt="Ellipse 12" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} />

        

        </div>
       

        
        
      
      
        
        
        </div>

       
  )
}

export default Hero1