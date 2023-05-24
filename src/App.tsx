import React from 'react';
import './App.css';
import { Characters } from './components/characters/Characters';
import { Card } from './components/card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className='wrapper'>
        <Routes>
          <Route path="/Characters" Component={Characters} />
          <Route path='/card' Component={Card} />
        </Routes>
        
       </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
