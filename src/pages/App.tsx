import React, { useState, useEffect } from 'react';
import './App.css';
import Carousel from '../components/Carousel/Carousel';

const App: React.FC = () => {
  const [ imageAPI, setImageAPI ] = useState([]);

  useEffect(() => {
    async function fetching() {
      try {
        const api = await fetch('https://aged-toque.glitch.me/');
        const apiJSON = await api.json();
        setImageAPI(apiJSON);
      } catch (error) {
        console.log('An error occurred on fetching api: ', error);
      }
    }
    fetching();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h3>Carousel in React</h3>
      </header>
      <Carousel imageAPI={imageAPI} />
    </div>
  );
};

export default App;
