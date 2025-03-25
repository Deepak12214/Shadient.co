import React from 'react'
import HeroSection from '../Hero'
import ServicesContent from './ServicesContent'

const Services = () => {
  return (
    <div>
          <HeroSection
      subtitle="Branding"
      title="Find your niche"
      description={`Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros\nRisus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros`}
      buttonLabel="BUILD MY BRAND"
      onButtonClick={() => console.log('Brand button clicked')}
      className="min-h-[400px] grid-bg"
    />
    <ServicesContent/>
    </div>
  )
}

export default Services
