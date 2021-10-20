import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';


export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext);

    const handleClick = () => {
        // history.push('/');
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Edmundo',
                logged: true
            }
        });
        history.replace(lastPath);
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}
