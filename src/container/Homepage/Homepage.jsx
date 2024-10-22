import React from 'react';
import { About, Footer, Header,  Pricing, Work, Skills, Cta, Slider, Publication} from '../';

const Homepage = () => {
  return (
    <>
      <Header /> 
      <Cta/>
      {/* <Publication />           */}
      <Slider/>
      {/* <Work/> */}
      <About />
      <Skills/>
      <Pricing />
      <Footer />
    </>
  );
};

export default Homepage;