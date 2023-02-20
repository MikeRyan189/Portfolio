import React from 'react';
import headshot from './headshot.jpg'
import { SocialIcon } from 'react-social-icons';


function App() {
  return (
    <div className='bg-slate-600 h-screen flex flex-col items-center justify-center' >
      <div className='flex flex-row items-center w-[700px]  bg-slate-300'>
     <img src={headshot} alt='headshot' className='h-[250px] '></img>
     <div>
     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <SocialIcon network="linkedin" style={{ height: 75, width: 75 }} />
     <SocialIcon network="github" style={{ height: 75, width: 75 }} />
     </div>

      </div>
    </div>
  );
}

export default App;
