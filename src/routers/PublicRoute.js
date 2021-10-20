import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //El resto de los elementos van a caer por aca. 
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated)
                ? (<Component {...props}/>)
                : (<Redirect to='/'/>)
                
            )}
        />
    )
}
PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

