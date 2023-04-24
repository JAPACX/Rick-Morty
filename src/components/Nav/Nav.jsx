import React from "react";
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

function Nav(props) {
  return (
    <nav className={style.navbar}>
      <ul> </ul>
    <SearchBar onSearch={props.onSearch}/>
      
    </nav>
  )
}

export default Nav


