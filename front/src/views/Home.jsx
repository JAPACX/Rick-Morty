import React from "react";
import Cards from '../components/Cards/Cards'

export default function Home(props) {
  return (
    <>
    <Cards characters={props.characters} onClose = {props.onClose}/>
    </>
  )
}

