import React from 'react';
import './App.css';
import { Characters } from './components/characters/Characters';
import { CharacterDetails } from './components/card/CharacterDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className='wrapper'>
        <Routes>
          <Route path="/characters" Component={Characters} />
          <Route path='/characters/:id' Component={CharacterDetails} />
        </Routes>
       </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
