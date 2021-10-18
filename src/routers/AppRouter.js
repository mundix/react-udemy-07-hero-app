import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    {/* <Route exact path='/marvel' component={MarvelScreen} /> */}
                    {/* <Route exact path='/dc' component={DcScreen} /> */}
                    <Route  path='/' component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
