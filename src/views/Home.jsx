import React from "react";
import Nav from '../components/Nav/Nav'
import Cards from '../components/Cards/Cards'

function Home(props) {
  return (
    <>
    <Nav onSearch={props.onSearch}/>
    <Cards characters={props.characters} onClose = {props.onClose}/>
    </>
  )
}

export default Home