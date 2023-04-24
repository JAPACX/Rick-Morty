import React from 'react'
import styles from './Card.module.css'

export default function Card({ name, species, gender, image, onClose }) {
   
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
            <img 
               className={styles.img}
               src={image} alt={name}
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
            />
         </div>
         <div className={styles.inferior}>
            <h3> {species}</h3>
            <h3> {gender}</h3>
         </div>
      </div>
   );
}
