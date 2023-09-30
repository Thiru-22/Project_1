import React from 'react';
import './App.css';

import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Pickitem from './components/Pickitem';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Appbar/>
    <Banner/>
    <Menu/>
    <Pickitem/>
    <Contact/>
    </>
  );
}

export default App;
