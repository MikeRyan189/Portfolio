import React from 'react';
import headshot from './headshot.jpg'
import EZstack from './EZstack.jpg'
import graceShopper from './graceShopper.jpg'
import weather from './weather.jpg'
import { Routes, Route} from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';

import { SocialIcon } from 'react-social-icons';

{/* <SocialIcon network="linkedin" style={{ height: 75, width: 75 }} />
     <SocialIcon network="github" style={{ height: 75, width: 75 }} /> */}
function App() {
  return (
    <div className='App'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
     
    </div>
    
  );
}

export default App;
