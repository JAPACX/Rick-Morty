

import './App.css'

// Vistas 
import Home from './views/Home'
import Me from './views/Me'
import CardsDetails from './views/CardsDetails'
import Form from './components/Form/Form'


// Componente que se visualiza en todas las rutas menos en "/"
import Nav from './components/Nav/Nav'

// Hooks de React necesario para el proyecto
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


// SPA
function App() {

  // Estado useState que almacena en un array los personajes y la funcion que lo modifica
  const [characters, setCharacters] = useState([])

  // Simulacion de seguridad
  const [access, setAccess] = useState(false)
  let username = 'jepacheco98@gmail.com'
  let password = 'pass123'

  // Objeto que guarda los datos validos y los pasa por props a form
  const navigate = useNavigate();

  function login(userData) {
    if (userData.email === username && userData.password === password) {
       setAccess(true);
       navigate('/home');
    }
    else {
      alert('Datos incorrectos')
    }
 }

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

  const location = useLocation();


  return (
    <div className='App' style={{ padding: '25px' }}>


      {location.pathname !== '/' && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/'
          element={<Form 
            login = {login}
          />}
        />
        <Route path='/Home'
          element={<Home
            onSearch={onSearch}
            characters={characters}
            onClose={onClose} />}
        />
        <Route path='/about'
          element={<Me />}
        />


        <Route path='/detail/:detailId' element={<CardsDetails />} />
      </Routes>

    </div>
  )
}


export default App
