import React from 'react'
import HeroSection from '../Hero'
import AboutContent from './AboutContent'

const AboutUs = () => {
  return (
    <div>
          <HeroSection
      subtitle="About us"
      title="Shadient.co"
      gradientWords={[]} 
      description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros"
      showInput={false}
      buttonLabel="CONTACT"
      onButtonClick={() => console.log('Contact clicked')}
    />

    <AboutContent/>

    </div>
  )
}

export default AboutUs
