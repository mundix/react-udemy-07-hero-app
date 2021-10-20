import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import {
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

// Se envia el history del prop del componente que esta dentro de las rutas, y asi 
// El NavBar tiene el obj history y asi puedo usar history.replace('/login')
// La idea es no compartir mucha informacion atraves de las properies y sin el shistory
// export const DashboardRoutes = ({history}) => {
export const DashboardRoutes = () => {
    return (
        <>
        
            {/* <Navbar history={history}/> */}
            <Navbar />
            <div className='container mt-2'> 
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/hero/:heroeId' component={HeroScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
