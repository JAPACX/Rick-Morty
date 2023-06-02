import { ADD_FAVORITES, DELETE_FAVORITE, ORDER, FILTER } from './actions'



const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };


        case DELETE_FAVORITE:
            return { ...state, myFavorites: action.payload };

        case FILTER:
            if (action.payload === "Todos") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            }
            else {
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter(char => char.gender === action.payload)
                }
            }

        case ORDER:
            if (action.payload === "Ascendente") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters].sort((a, b) => a.id - b.id)
                };
            }
            if (action.payload === "Descendente") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters].sort((a, b) => b.id - a.id)
                };
            }

        default:
            return { ...state }
    }
};

export default rootReducer;