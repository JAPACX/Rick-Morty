import styles from './SearchBar.module.css'
import React from 'react';


export default function SearchBar(props) {

   const [searchInput, setSearchInput] = React.useState('');

   function handleInputChange(event) {
      setSearchInput(event.target.value);
   }
   return (
      <div className={styles.container}>
         <input className={styles.input} type='search' onChange={handleInputChange}/>
         <button className={styles.button} onClick={()=>{props.onSearch(searchInput)}}>Agregar</button>
      </div>
   );
}
