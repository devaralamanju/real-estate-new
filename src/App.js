import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomeBanner from './components/HomeBanner/HomeBanner';
import TruliaHelp from './components/TruliaHelp/TruliaHelp';
import CheckoutNeighborhood from './components/CheckoutNeighborhood/CheckoutNeighborhood';
import Footer from './components/Footer/Footer';
import FooterLegalNotice from './components/FooterLegalNotice/FooterLegalNotice';
import { getNewListedHomes } from './services/realEstateService';
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed';
import Carousel from './components/Carousel/Carousel';



const App = () => {
  const homes = getNewListedHomes();
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <RecentlyViewed/>
      <TruliaHelp/>
      <Carousel/>
      <CheckoutNeighborhood/>
      <Footer/>
      <FooterLegalNotice/>
    </div>
  );
}

export default App;





