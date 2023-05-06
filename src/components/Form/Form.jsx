import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react'


import validation from './validation'


export default function Form({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    function handleInputChange(event) {
        const property = event.target.name //  se guarda el nombre de la propiedad que queremos modificar
        const value = event.target.value // con este valor la vamos a modificar 

        setUserData({ ...userData, [property]: value }) // usamos Brackect notation para poder acceder a la propiedad correcta y setear el valor 

        validation({ ...userData, [property]: value }, setErrors)

    }

    function submitHandler(event) {
        event.preventDefault();
        
        login(userData)
    }

    return (
        <form onSubmit={submitHandler} className={styles.forms}>

            <div className={styles.form}>
                <label htmlFor="email"> Username:</label>
                <input
                    type="text"
                    name='email'
                    value={userData.email}
                    onChange={handleInputChange}
                    className={errors.email ? styles.error : styles.success}
                />
                <span>
                    {errors.email}
                </span>
            </div>

            <div className={styles.form}>
                <label htmlFor="password"> Pass</label>
                <input
                    type="text"
                    name='password'
                    value={userData.password}
                    onChange={handleInputChange}
                    className={errors.password ? styles.error : styles.success}
                />
                <span>
                    {errors.password}
                </span>
            </div>
            <button type='submit' >Login</button>

        </form>
    )
}

