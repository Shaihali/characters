import React from 'react';
import './App.css';
import { Characters } from './components/characters/Characters';
import { CharacterDetails } from './components/characterDetails/CharacterDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Filtration } from './components/filtration/Filtration';
import { FilteredCharacters } from './components/FilteredCharacters/FilteredCharacters';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className='wrapper'>
         <Filtration />
        <Routes>
          <Route path="/characters" Component={Characters} />
          <Route path='/characters/:id' Component={CharacterDetails} />
          <Route path='/characters/:search' Component={FilteredCharacters} />
        </Routes>
       </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
