import React from 'react';
import { LoginScreen } from '../components/Login/LoginScreen';
import { Navbar } from '../components/ui/NavBar';
import { Marvel } from '../components/marvel/Marvel';


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/' component={Marvel} />
                </Switch>
            </div>
        </Router>
    )
}
