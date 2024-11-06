import React from 'react';
import { About, Footer, Header,  Pricing, Work, Skills, Cta, Slider, AgentTabs, ResourcesTabs, Publication} from '../';

const Homepage = () => {
  return (
    <>
      <Header /> 
      <Cta/>
      {/* <Publication />           */}
      <Slider/>
      <About />
      <Work/>
      
      <ResourcesTabs/>
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;