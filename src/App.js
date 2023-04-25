
// import Card from './components/Card/Card.jsx'
// import SearchBar from './components/SearchBar/SearchBar.jsx'
// import characters, { Rick } from './data.js'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from 'react'

function App () {
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

function onClose(id){

  const newCharacters = characters.filter(char => char.id !== id);

  setCharacters(newCharacters);
}


  return (
    <div className='App' style={{ padding: '25px' }}>
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      <Nav onSearch={onSearch}/>
      <div>
      <Cards characters={characters} onClose = {onClose}/>
      </div>
    </div>
  )
}

export default App
