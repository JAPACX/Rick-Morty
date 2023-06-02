import axios from "axios";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ORDER = "ORDER";
export const FILTER = "FILTER";


export function addCharToFavorite(char){
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, char).then(({ data }) => {
          return dispatch({
             type: ADD_FAVORITES,
             payload: data,
          });
       });
    };
 };

export function deleteFavorite(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FAVORITE,
             payload: data,
       });
       });
    };
 };

export function filterCards(gender){
    return {type:FILTER, payload:gender}
}

export function orderCards(id){
    return {type:ORDER, payload:id}
}


