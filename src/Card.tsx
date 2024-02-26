// import { useState } from 'react';
import { Logo } from './components/Logo';
import { Maps } from './components/Maps';
import { SocialNetworks } from './components/SocialNetworks';
import './global.css'

export const Card = () => {

  // const [lightMode, setLightMode] = useState(0)

  return (
    <section className='card'>
      <div className='card__container'>
        <Logo/>

        <SocialNetworks/>

        {/* <Maps/> */}
        
      </div>
    </section>
  )
};
