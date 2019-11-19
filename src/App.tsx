import React from 'react';
import './App.css';
import Carousel from './Carousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Carousel in React</h3>
      </header>
      <Carousel />
    </div>
  );
};

export default App;
