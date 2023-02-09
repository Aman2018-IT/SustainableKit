import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import JsonData from './My_data/My_data.json'
import SmoothScroll from 'smooth-scroll'
import { Header } from './Components/Header'
import { Navigation } from './Components/Navigation'
import {Features} from  './Components/Features'
import {Team} from  './Components/Team'
import {Services} from  './Components/Services'
import {Testimonials} from  './Components/Testimonials'
import {Image} from  './Components/Image'
import {Contact} from  './Components/Contact'
import {About} from  './Components/About'
import {Product} from  './Components/Product'










export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



  

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <React.Fragment>
       <Navigation/>
       <Header data={landingPageData.Header}/>
       <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Product data={landingPageData.Product} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </React.Fragment>
  );
}

export default App
