import { Children, useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sideadds from './components/Sideadds';
import CurrencyBar from './components/Currencybar';
import Slider from './components/Slider';
import Weather from './components/Weather';
import Body from './components/Body';
export  default function App(){
    return (
      <>
         <Navbar/>
         <CurrencyBar/>
         <Body/>
      </>      
    );
}

