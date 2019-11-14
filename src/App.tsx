import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel />
      </header>
    </div>
  );
};

export default App;
