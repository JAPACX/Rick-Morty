

import './App.css'
import Home from './views/Home'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {

    const newCharacters = characters.filter(char => char.id !== id);

    setCharacters(newCharacters);
  }


  return (
    <div className='App' style={{ padding: '25px' }}>

      <Routes>

        <Route path='/'
          element={<Home
            onSearch={onSearch}
            characters={characters}
            onClose={onClose}
          />}
        />
        <Route path='/detail/:detailId'element={<div>Sobre mi vida</div>}/>
        <Route path='/about' element={<div>Sobre mi vida</div>}/>
      </Routes>

    </div>
  )
}

export default App
