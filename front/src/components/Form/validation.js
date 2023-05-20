export default function validation (userData, setErrors) {
    const regexEmail = /^[a-zA-Z]\w*([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/; 
    const regexPassword = /^[a-zA-Z0-9]{1,10}$/;

    const error = {} // este objeto al final es usado por la funcion por que si usamos directamente setErrors


    if (!userData.email) error.email = 'Email vacio'
    if (userData.email) {
        if (regexEmail.test(userData.email)) error.email = ''
        else { error.email = 'Email invalido' }

    }
    if (!userData.password) error.password = 'la contraseña tiene que tener al menos un caracter'
    if (userData.password) {
        if (regexPassword.test(userData.password)) error.password = ''
        else { error.password = 'Debe contener entre 6 y 10 caracteres'}
    }

    setErrors(error)
}