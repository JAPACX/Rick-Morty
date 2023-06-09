

import './App.css'

// Vistas 
import Home from './views/Home'
import Me from './views/Me'
import CardsDetails from './views/CardsDetails'
import Form from './components/Form/Form'
import Favorites from "./components/Favorites/Favorites"

import axios from 'axios';

// Componente que se visualiza en todas las rutas menos en "/"
import Nav from './components/Nav/Nav'

// Hooks de React necesario para el proyecto
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'


// SPA
function App() {

  // Estado useState que almacena en un array los personajes y la funcion que lo modifica
  const [characters, setCharacters] = useState([])

  // Simulacion de seguridad
  const [access, setAccess] = useState(false)


  // Hook de react que va a redireccionar a otra URL
  const navigate = useNavigate();

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const { data } = await axios(URL + `?email=${email}&password=${password}`)
    const { access } = data;
    setAccess(access);
    access ? navigate('/home') : window.alert('User invalido')
  }

  async function onSearch(character) {
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      const existsChar = characters.some((element) => element.id == data.id);
      if (data.name && !existsChar) {
        setCharacters((characters) => [...characters, data]);
      } else {
        window.alert('Ya el personaje existe');
      }

    } catch (error) {
      window.alert('No hay personajes con ese ID');
    }
  }

  function onClose(id) {

    const newCharacters = characters.filter(char => char.id !== id);

    setCharacters(newCharacters);

  }

  const location = useLocation();

  //valida que si el estado de access es distinto de true, siempre redirecciona a la pagina '/'

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>


      {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}

      <Routes>
        <Route path='/'
          element={<Form
            login={login}
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
        <Route path='/favorites'
          element={<Favorites />}
        />


        <Route path='/detail/:detailId' element={<CardsDetails />} />
      </Routes>

    </div>
  )
}


export default App
