import React, { useState, useEffect } from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// se importan y se le pasan al mapdispatch y mapstate al final 
import { addCharToFavorite, deleteFavorite } from '../../redux/actions'

function Card(props) {
   const { id, name, species, gender, image, onClose, showCloseButton } = props

   // se tran por props los estados globales para que puedan ser
   const { allCharacters, addCharToFavorite, deleteFavorite } = props

   const [isFav, setIsFav] = useState(false)

   function handleMouseOver(event) {
      event.target.classList.add(styles.zoom);

   }

   function handleMouseOut(event) {
      event.target.classList.remove(styles.zoom);
   }

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else {
         setIsFav(true)
         addCharToFavorite(props)
      }
   }

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);
   return (



      <div className={styles.card}>

         <div className={`${showCloseButton ? styles.buttonsall : styles.buttons}`}>
            <div>
               {isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )}
            </div>
            {showCloseButton && (
               <button className={styles.button} onClick={onClose}>X</button>
            )}
         </div>




         <div className={styles.picture}>
            <h2 className={styles.h2}>{name}</h2>
            <Link to={`/detail/${id}`}>
               <img
                  className={styles.img}
                  src={image} alt={name}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
               />
            </Link>
         </div>
         <div className={styles.inferior}>
            <h3>{species}</h3>
            <h3 onClick={handleFavorite}> {gender}</h3>
         </div>
      </div>

   );
}

export function mapStateToProps(state) {

   return {
      allCharacters: state.allCharacters,
   }
}

function mapDispatchToProps(dispatch) {

   return {
      addCharToFavorite: (favorite) => {
         dispatch(addCharToFavorite(favorite))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
