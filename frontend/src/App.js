import React, { useState } from 'react';
import './App.styl';
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
      <section id="main">
        <Leftbar isOpen={isOpen} />
        <Rightbar />
      </section>
    </div>
  );
};

export default App;
