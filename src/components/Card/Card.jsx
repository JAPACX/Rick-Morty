import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({id, name, species, gender, image, onClose }) {
   
   function handleMouseOver(event) {
      event.target.classList.add(styles.zoom);
      
    }
  
    function handleMouseOut(event) {
      event.target.classList.remove(styles.zoom);
    }



   return (
      

      
      <div className={styles.card}>

         <button className={styles.button} onClick={onClose}>X</button>
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
            <h3> {species}</h3>
            <h3> {gender}</h3>
         </div>
      </div>
      
   );
}
 