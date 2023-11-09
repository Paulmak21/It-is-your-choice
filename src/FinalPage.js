import React, { useState, useEffect } from 'react';
import MatrixRain from './MatrixRain';
import './components/FinalPage.css';


function FinalPage() {
const [quote, setQuote] = useState('');
const quotes = [
      '"Denial is the most predictable of all human responses" – The Architect',
      '"Choice is an illusion created between those with power and those without" – Merovingian',
      '"Choice. The problem is choice" – Neo',
      '"What do all men with power want? More power" – The Oracle ',
      '"To deny our own impulses is to deny the very thing that makes us human" – Mouse',
      '"Not like this. Not like this" – Switch',
      '"We are still here!" – Morpheus',
      '"The body cannot live without the mind" – Morpheus',
      '"Ignorance is bliss" – Cypher',
      `"What you know you can't explain, but you feel it. You've felt it your entire life" – Morpheus `,
      `"Remember... all I'm offering is the truth. Nothing more" – Morpheus`,
];

useEffect (() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
}, []);
  
  return (
      
    <div>
    <MatrixRain />
      {
      <h1
      className='Not__Worthy'>{quote}</h1>
      }
    </div>
  );
}

export default FinalPage;