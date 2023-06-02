

import './App.css'

// Vistas 
import Home from './views/Home'
import Me from './views/Me'
import CardsDetails from './views/CardsDetails'
import Form from './components/Form/Form'
import Favorites from "./components/Favorites/Favorites"


// Componente que se visualiza en todas las rutas menos en "/"
import Nav from './components/Nav/Nav'

// Hooks de React necesario para el proyecto
import { useState , useEffect} from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'


// SPA
function App() {

  // Estado useState que almacena en un array los personajes y la funcion que lo modifica
  const [characters, setCharacters] = useState([])

  // Simulacion de seguridad
  const [access, setAccess] = useState(false)
  let username = ''
  let password = ''

  // Hook de react que va a redireccionar a otra URL
  const navigate = useNavigate();

  // Funcion que valida que los datos en userData coincidan con la base de datos "autorizada"

  function login(userData) {
    if (userData.email === username && userData.password === password) {
       setAccess(true);
       navigate('/home');
    }
    else {
      alert('Datos incorrectos informacion en el Readme')
    }
 }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    // fetch(`http://localhost:3001/onsearch/${character}`) // servidor local que consume datos de fuera


      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch(()=>{
        window.alert('No hay personajes con ese ID');
      })
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


      {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}

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
        <Route path='/favorites'
          element={<Favorites />}
        />


        <Route path='/detail/:detailId' element={<CardsDetails />} />
      </Routes>

    </div>
  )
}


export default App
