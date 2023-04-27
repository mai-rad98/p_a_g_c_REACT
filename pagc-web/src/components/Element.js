import * as React from 'react'
import { Card, Box, Typography} from '@mui/material'


function Element() {
  return (
   
    <div>
      <Typography variant="h4" sx={{
         marginTop: 5,
      fontWeight: 'bold',
      fontSize: 50,
      color:'#B28612' }}>
        Objectives
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          marginLeft: 15,
          backgroundColor:'#FBF7EB',
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}>
          <Box sx={{
    position: 'absolute',
    top: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'orange'
  }} />

<Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
        </Card>
      
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          backgroundColor:'#FBF7EB',
          marginLeft: 15,
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}>
          <Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
          <Box sx={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'white'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -10,
      right: -10,
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: 'orange',
      zIndex: -1
    }
  }} />
        </Card>
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          marginLeft: 15,
          backgroundColor:'#FBF7EB',
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}><Box sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'orange'
        }} />
      
          <Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
        </Card>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          backgroundColor:'#FBF7EB',
          marginLeft: 15,
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}><Box sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'orange'
        }} />
      
          <Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
        </Card>
      
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          marginLeft: 15,
          backgroundColor:'#FBF7EB',
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}>
          <Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
          <Box sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'white'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -10,
      left: -10,
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: 'orange',
      zIndex: -1
    }
  }} />
        </Card>
        <Card sx={{
          maxWidth: 500,
          height: 250,
          width: 300,
          marginLeft: 15,
          backgroundColor:'#FBF7EB',
          transition: 'all 0.2s ease-in-out', // add transition effect
          transform: 'translateY(0)', // initial transform
          ':hover': { // add hover effect
            transform: 'translateY(-30px)', // transform when hovering over card
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // add box shadow
            zIndex: 1, // add z-index to ensure card is above other cards
          },
        }}>
          <Box sx={{
    position: 'absolute',
    top: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'orange'
  }} />
          <Typography sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }}>
    Card bhbhbbhbjh
  </Typography>
        </Card>
      </Box> 
      <Typography> lets end here</Typography>

    
  </div>
   

   

    
  )
}

export default Element
