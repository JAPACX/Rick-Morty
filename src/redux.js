// Primero, es necesario instalar redux con npm i redux

// Importar la función createStore desde la librería redux
const { createStore } = require("redux");

// Definir el estado inicial de la aplicación
const initialState = {
    count: 0,
    name:'Javier',
    numbers:[],
};

const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR"
const REDUCIR_CONTADOR = "REDUCIR_CONTADOR"
const CAMBIAR_NOMBRE = "CAMBIAR_NOMBRE"
const AGREGAR_NUMERO = "AGREGAR_NUMERO"

// Definir la función reducer que se encargará de hacer las modificaciones en el estado
const reducer = (state = initialState, action) => {
    // En función del tipo de acción recibido, se realizará una modificación en el estado
    switch (action.type) {
        case AUMENTAR_CONTADOR:
            // En este caso, se incrementa el valor de count en 1
            return { ...state, count: state.count + 1 };
        case REDUCIR_CONTADOR:
            // En este caso, se decrementa el valor de count en 1
            return { ...state, count: state.count - 1 };
        case CAMBIAR_NOMBRE:
            // En este caso, se decrementa el valor de count en 1
            return { ...state, name:action.payload };
        case AGREGAR_NUMERO:
            // se agrega un numero y se retorna un nuevo estado con todo igual mas un numero al final pasado por payload 
            return { ...state, numbers:[...state.numbers, action.payload] };


        default:
            // En caso contrario, se devuelve el estado sin cambios
            return { ...state };
    }
};

// Crear el store a partir del reducer
const store = createStore(reducer);

// Función que se encarga de imprimir el estado actual del store en la consola
const print = () => {
    console.log(store.getState());
};

// Registrar la función print como suscriptor del store para que se ejecute cada vez que haya un cambio en el estado
store.subscribe(print);

// Enviar una solicitud al reducer para aumentar el contador
store.dispatch({ type: AUMENTAR_CONTADOR });
store.dispatch({ type: REDUCIR_CONTADOR });
store.dispatch({type:CAMBIAR_NOMBRE, payload:'Pacheco'})
store.dispatch({type:AGREGAR_NUMERO, payload:10})
store.dispatch({type:AGREGAR_NUMERO, payload:11})

// Actions creators 
const cambiarNombre = (nombre)=>{
    return {type:CAMBIAR_NOMBRE, payload:nombre}
}


store.dispatch(cambiarNombre(`Action Creator`))