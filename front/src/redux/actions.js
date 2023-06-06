import axios from "axios";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ORDER = "ORDER";
export const FILTER = "FILTER";


export  function addCharToFavorite(char) {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      const { data } = await axios.post(endpoint, char)
      return dispatch({
         type: ADD_FAVORITES,
         payload: data,
      });
   };
};

export function deleteFavorite(id) {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: DELETE_FAVORITE,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
   };
};

export function filterCards(gender) {
   return { type: FILTER, payload: gender }
}

export function orderCards(id) {
   return { type: ORDER, payload: id }
}


