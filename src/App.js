

import './App.css'

// Vistas 
import Home from './views/Home'
import Me from './views/Me'
import CardsDetails from './views/CardsDetails'


//Componente que se visualiza en todas las rutas
import Nav from './components/Nav/Nav'

// Hooks de React necesario para el proyecto
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// SPA
function App() {

  //Estado useState que almacena en un array los personajes y la funcion que lo modifica
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

      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/'
          element={<Home
            onSearch={onSearch}
            characters={characters}
            onClose={onClose}/>}
        />
        <Route path='/about'           
            element={<Me/>}
        />


        <Route path='/detail/:detailId'element={<CardsDetails/>}/>
      </Routes>

    </div>
  )
}


export default App
