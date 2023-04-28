// import Card from "../Card/Card"
import React from "react";
import { useEffect, useState } from "react";
import styles from './Detail.module.css'
import { Link } from 'react-router-dom';


export default function Detail(props) {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${props.detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [props.detailId]);

    return (

        <>
            {
            character?.name && (
                <div className={styles.container}>
                    <p>Name: {character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image} alt={character.name} />
                    <div className={styles.reflex}></div>
                </div>
            )}
            <Link to={`/`} className={styles.volver}>
            <div>VOLVER ATRAS</div>
            </Link>
        </>


    );

}