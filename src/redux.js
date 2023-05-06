const {createStore} = require("redux")

const initialState = {
    count: 0,
    name: "",
    numeros:[1, 2, 3],
};

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        
        case "AUMENTAR_CONTADOR":
            return {...state, count: state.count +1};
        case "CAMBIAR_NOMBRE":
            return {...state, name: action.payload};
        
        case "AGREGAR_NUMEROS":
            return {...state, numeros: [...state.numeros, action.payload]};
        

        default:
            return {...state};
        
        
    
    }
}


const aumentarContador = ()=>{
    return {type:"AUMENTAR_CONTADOR"}
}


const store = createStore(reducer);
store.subscribe(print)

store.dispatch({type:"AUMENTAR_CONTADOR"})
store.dispatch({type:"CAMBIAR_NOMBRE", payload:"MARIA"})
store.dispatch({type:"AGREGAR_NUMERO", payload: 10})
store.dispatch(aumentarContador()) // --> Action creator   

const print = ()=>{
    console.log(store.getState)
}
