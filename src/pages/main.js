/* eslint-disable no-unused-vars */
import * as React from 'react';
import UfSelector from '../components/ufSelector';
import CitySelector from '../components/citySelector';
import Header from '../components/header';
import '../styles/mainStyles.css';
import CityInfoDisplay from '../components/cityInfoDisplay';
import Footer from '../components/footer';

function Main() {
  return (
    <div className='container'>
      <section className='header'>
        <Header />
      </section>
      <UfSelector />
      <CitySelector />
      <CityInfoDisplay />
      <section className='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default Main;
