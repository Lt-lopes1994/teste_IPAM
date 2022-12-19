/* eslint-disable no-unused-vars */
import * as React from 'react';
import UfSelector from '../components/ufSelector';
import CitySelector from '../components/citySelector';
import Header from '../components/header';
import '../styles/mainStyles.css';
import CityInfoDisplay from '../components/cityInfoDisplay';

function Main() {
  return (
    <div className="container">
      <Header />
      <UfSelector />
      <CitySelector />
      <CityInfoDisplay />
    </div>
  );
}

export default Main;
