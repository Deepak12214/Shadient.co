import HeroSection from '../Hero';
import TrustedSection from '../TrustedSection';
import ServicesSection from '../ServicesSection';
import WhyChooseUsSection from '../WhyChooseUsSection';
import ProjectsSection from '../ProjectsSection';
import CustomerSection from '../CustomerSection';
import DiscussIdeaSection from '../DiscussIdeaSection';
    
    const Home = () => {
    return (
        <div>
            <div className='w-full xl:w-5/12 mx-auto'>
                <HeroSection
            title={`Attract NewLeads like never before`}
            gradientWords={['NewLeads']}
            description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros"
            showInput={true}
            buttonLabel="ATTRACT"
            />   
            </div>
            <TrustedSection/>

            <ServicesSection/>
            <WhyChooseUsSection/>
            <ProjectsSection/>
            <CustomerSection/>
            <DiscussIdeaSection/>
      </div>
      );
}

export default Home
