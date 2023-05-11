import React from "react";
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';


function Nav(props) {




  return (
    <nav className={style.navbar}>
      <div>

        <Link to={"/Home"} >
          <button className={style.buttonL}>Home</button>
        </Link>

        <Link to={"/Favorites"} >
          <button className={style.buttonL}>Favorites</button>
        </Link>

        <Link to={"/about"} >
          <button className={style.buttonL}>About</button>
        </Link>

        <button className={style.buttonL} onClick={() => { props.setAccess(false) }}>Logout</button>



      </div>


      <SearchBar onSearch={props.onSearch} />

    </nav>
  )
}

export default Nav


