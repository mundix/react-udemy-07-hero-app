import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './components/auth/AuthContext';
import { authReducer } from './components/auth/authReducer';

export const HeroesApp = () => {

    const init = () => {
        // Leo si esta logueado por localStorage si tiene l eobjeto , si no manda logged false
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    }
    //En el componente de mayor relevancia , se llama al reducer paraenviarlo atraves de las useContext custom
    const [user, dispatch] = useReducer(authReducer, {}, init);

    // Guarda el user de la session (En caso de queel token cambien debe reiniciar o enviar a loguear)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user,dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
