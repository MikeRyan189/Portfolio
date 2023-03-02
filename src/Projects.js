import React from 'react';
import EZstack from './EZstack.jpg'
import graceShopper from './graceShopper.jpg'
import weather from './weather.jpg'
import mintchat from './mintchat.jpg'


import { SocialIcon } from 'react-social-icons';


function Projects() {
  return (
    <div className='bg-gray-700 h-full flex flex-col items-center justify-evenly font-mono' >
      
      <div className='flex flex-col items-center rounded-xl'>
        <p className='mt-10 text-xl font-bold text-green-500' >EZ-Stack</p>
        <p className=' text-l font-bold text-white text-center'>PostgreSQL | Express | React | Redux | Node | CSS | Material UI | JWT | Cloudinary</p>
      <img src={EZstack} alt='headshot' className='mt-10 rounded-xl border-green-500 border-4 w-96'></img>
      <div>
      <a href='https://github.com/MikeRyan189/Freelance-App.git'><button className=' m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Code</button></a>
      <a href='https://youtu.be/v1D-3LLx3NA'><button className='m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Demo</button></a>
      </div>
      </div>
      <div className='flex flex-col items-center  rounded-xl'>
      <p className='mt-10 text-xl font-bold text-green-500' >Grace Shopper</p>
      <p className=' text-l font-bold text-white text-center'>PostgreSQL | Express | React | Redux | Node | Tailwind CSS | JWT </p>

      <img src={graceShopper} alt='headshot' className='mt-10 rounded-xl border-green-500 border-4 w-96 '></img>
      <div>
      <a href='https://github.com/MikeRyan189/E-Commerce.git'><button className=' m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Code</button></a>
      <a href='https://youtu.be/0Kiejs5rfOo'><button className='m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Demo</button></a>
      </div>
      </div>
      <div className='flex flex-col items-center rounded-xl'>
      <p className='mt-10 text-xl font-bold text-green-500' >Mint Chat</p>
      <p className=' text-l font-bold text-white text-center'>React | Tailwind CSS | OpenAI</p>
      <img src={mintchat} alt='headshot' className='mt-10 rounded-xl border-green-500 border-4 w-96'></img>
      <div className='mb-10'>
      <a href='https://github.com/MikeRyan189/Mint-Chat.git'><button className=' m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Code</button></a>
      <a href='https://mint-chat.onrender.com'><button className='m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Demo</button></a>
      </div>
      </div>
      <div className='flex flex-col items-center rounded-xl w-300px'>
      <p className='mt-10 text-xl font-bold text-green-500' >Realtime Weather</p>
      <p className=' text-l font-bold text-white text-center'>React | CSS | OpenWeather</p>
      <img src={weather} alt='headshot' className='mt-10 rounded-xl border-green-500 border-4 w-96'></img>
      <div className='mb-10'>
      <a href='https://github.com/MikeRyan189/weatherapp.git'><button className=' m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Code</button></a>
      <a href='https://youtu.be/7KGS2kNVlaM'><button className='m-5 bg-green-500 hover:bg-white hover:text-green-500 h-10 w-[100px] md:w-[150px] rounded-xl font-bold'>Demo</button></a>
      </div>
      </div>
    </div>
    
  );
}

export default Projects;
