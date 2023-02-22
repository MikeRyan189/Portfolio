import React from 'react';
import headshot from './headshot.jpg'
import EZstack from './EZstack.jpg'
import graceShopper from './graceShopper.jpg'
import weather from './weather.jpg'
import { Link } from "react-router-dom";


import { SocialIcon } from 'react-social-icons';

function Home() {
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center ' >
      <div className='flex flex-row items-center w-[800px]   mt-10  rounded-xl'>
     <img src={headshot} alt='headshot' className='h-[250px] ml-10 rounded-xl '></img>
     <div>
     <p className='m-10 text-lg font-bold text-white' >Hello, my name is<span className='text-3xl font-bold text-green-500'> Michael Ryan.</span> I am a <span className='text-3xl font-bold text-green-500'> Full Stack Software Developer</span> with a passion for using technology to solve problems and create innovative and user-friendly web applications. I have primarily worked in the PERN stack but I am always looking to expand my knowledge of other technologies and stacks.</p>
     </div>

      </div>
      <div>
        <Link to={'/projects'}><button className='bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[200px] rounded-xl font-bold'>My Projects</button></Link>
      </div>
      <div>
      <a href='https://www.linkedin.com/in/michaelg-ryan/'><SocialIcon className='m-10 hover:bg-white rounded-xl' network="linkedin" style={{ height: 75, width: 75 }} bgColor='#22c55e' /></a>
     <a href='https://github.com/MikeRyan189'><SocialIcon className='m-10 hover:bg-white rounded-xl' network="github" style={{ height: 75, width: 75 }} bgColor='#22c55e' /></a>
      </div>
    </div>
    
  );
}

export default Home;
