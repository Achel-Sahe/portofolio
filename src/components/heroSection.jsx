import React from 'react'
import SideRays from './overlay'
import TextHero from './textHero'
import MusicPlayer from './music'
import './comps.css'; 

const Hero = () => {
  return (
    <div className='hero-section'>
      <TextHero />
      <div className="music">
        <MusicPlayer/>
      </div>
    </div>
  )
}

export default Hero