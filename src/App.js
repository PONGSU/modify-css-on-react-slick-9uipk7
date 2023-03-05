import React from 'react';
import './App.css';

// data
import sliderData from './sliderData';

// component
import Sliders from './Sliders';
import ProductCard from './ProductCard';

export default function App() {
  return (
    <>
      <h1>Carrossel</h1>
      <Sliders>
        {sliderData.map((item) => {
          return <ProductCard name={item.name} img={item.image} />;
        })}
      </Sliders>
    </>
  );
}
