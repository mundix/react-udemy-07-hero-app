import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


// otro functional component , con un compoertamiento especial 
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //El resto de los elementos van a caer por aca. 
}) => {

    // guardamos el lastpath para que me redireccion a la pagina que estba si por ejemplo el login
    // O token expira. 
    localStorage.setItem('lastPath',rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated)
                ? (<Component {...props} />)
                : (<Redirect to='/login'/>)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}