export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ORDER = "ORDER";
export const FILTER = "FILTER";

export function addCharToFavorite(char){
    return {type:ADD_FAVORITES, payload:char}
}

export function deleteFavorite(id){
    return {type:DELETE_FAVORITE, payload:id}
}

export function filterCards(gender){
    return {type:FILTER, payload:gender}
}

export function orderCards(id){
    return {type:ORDER, payload:id}
}


