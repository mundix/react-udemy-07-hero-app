import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

// Como el NavBar no esta dentro de rutas, no tiene history , debe enviarse por props
// export const Navbar = ({history}) => {
export const Navbar = () => {

    // El context Provider habilita informacion en el arbol del componente 
    // El Router tambien provee informacion 
    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory(); //este de react router dom y me permite acceder al objeto history 

    const handleLogout = () => {

        history.replace('/login');
        dispatch({
            type: types.logout,

        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        SEARCH
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{name}</span>
                    <button className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}