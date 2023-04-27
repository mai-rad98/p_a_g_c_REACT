import React from 'react'
import { useState, useEffect } from 'react';
import vice from '../assets/vice.jpg'





function Bottom() {
const [currentProfile, setCurrentProfile] = useState(0);
const [angle, setAngle] = useState(0);

const profiles = [  { id: 1, name: 'John', image: 'vice.jpg' },  { id: 2, name: 'Jane', image: 'profile2.jpg' },  { id: 3, name: 'Bob', image: 'profile3.jpg' },  { id: 4, name: 'Mary', image: 'profile4.jpg' },  { id: 5, name: 'Tom', image: 'profile5.jpg' },  { id: 6, name: 'Sue', image: 'profile6.jpg' }, 
 { id: 7, name: 'Dan', image: 'profile7.jpg' },  { id: 8, name: 'Kate', image: 'profile8.jpg' },];

useEffect(() => {
    const angle = (360 / profiles.length) * currentProfile;
    setAngle(angle);
  }, [currentProfile]);

  return (
    <div>
         <div sx={{
            borderRadius: 50,
            overflow: 'hidden',
            width: 300,
            height: 300,
         }}>
      {profiles.map((profile, index) => (
        <div sx={{
            position: 'absolute',
            top: 50,
            left: 50,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`

        }}
          key={profile.id}
    
          style={{ transform: `rotate(${(360 / profiles.length) * index}deg) translateY(-50%) rotate(${-angle}deg)` }}
        >
          <img src={profile.image} alt={profile.name} />
        </div>
      ))}
      <button onClick={() => setCurrentProfile(currentProfile - 1)}>Prev</button>
     <button onClick={() => setCurrentProfile(currentProfile + 1)}>Next</button>


      </div>
    </div>
  )
}

export default Bottom