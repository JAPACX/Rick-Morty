import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import style from "./Favorites.module.css"

import { filterCards, orderCards } from '../../redux/actions'



function Favorites(props) {

  const {myFavorites, filterCards, orderCards } = props

  function filterByGender(event) {
    const gender = event.target.value;
    filterCards("Todos") // se resetea el estado global ante cada cambio de gender
    filterCards(gender)
  }

  function orderList (event){
    const typeOrder = event.target.value;
    orderCards(typeOrder)
  }

  return (
    <>
      <div>
        <select onChange={orderList} >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={filterByGender}>
          <option value="Todos">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>

      <div className={style.favorites}>
        {myFavorites.map(({ id, name, species, gender, image, onClose }) => (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => { onClose(id) }}
          />
        ))}
      </div>
    </>

  );
}


export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
    myFavorites: state.myFavorites
  }
}

function mapDispatchToProps(dispatch) {

  return {
    filterCards: (gender) => {
      dispatch(filterCards(gender))
    },
    orderCards: (order) => {
      dispatch(orderCards(order))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
