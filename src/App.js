import React from 'react';
import headshot from './headshot.jpg'
import EZstack from './EZstack.jpg'
import graceShopper from './graceShopper.jpg'
import weather from './weather.jpg'


import { SocialIcon } from 'react-social-icons';

{/* <SocialIcon network="linkedin" style={{ height: 75, width: 75 }} />
     <SocialIcon network="github" style={{ height: 75, width: 75 }} /> */}
function App() {
  return (
    <div className='bg-sky-800 h-full flex flex-col items-center justify-between ' >
      <div className='flex flex-row items-center w-[700px]   mt-10 mb-10 rounded-xl'>
     <img src={headshot} alt='headshot' className='h-[250px] ml-10 rounded-xl '></img>
     <div>
     <p className='m-10 text-lg font-bold' ><span className='text-3xl font-bold'>Hello, my name is Michael Ryan.</span> I am a recent graduate of Fullstack Academy where I learned the fundamentals of full stack web development. I've worked primarily in the PERN stack but am constantly seeking to expand my knowledge of other technologies and stacks. Below are a few projects of mine from my time at Fullstack.     </p>
     </div>

      </div>
      <div className='flex flex-col items-center w-[700px]  bg-sky-100 mt-10 mb-10 rounded-xl'>
        <p className='mt-10 text-xl font-bold' >EZ-Stack</p>
      <img src={EZstack} alt='headshot' className='mt-10 rounded-xl '></img>
      <p className='m-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='flex flex-col items-center w-[700px]  bg-sky-100 mt-10 mb-10 rounded-xl'>
      <p className='mt-10 text-xl font-bold' >Grace Shopper</p>
      <img src={graceShopper} alt='headshot' className='mt-10 rounded-xl '></img>
      <p className='m-10' >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='flex flex-col items-center w-[700px]  bg-sky-100 mt-10 mb-10 rounded-xl'>
      <p className='mt-10 text-xl font-bold' >Realtime Weather</p>
      <img src={weather} alt='headshot' className='mt-10 rounded-xl '></img>
      <p className='m-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    
  );
}

export default App;
