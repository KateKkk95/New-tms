import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';
import ProfilePage from '../pages/Profile';

import { NavBar } from '../components';
import { ROUTES } from '../const';
import SignIn from '../components/SignIn';


const Navigator = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path={'/users/:index'} component={ProfilePage} />
                <Route path={ROUTES.USERS} component={UsersPage} />
                <Route path={ROUTES.PROFILE} component={ProfilePage} />

                <Route path={ROUTES.MAIN} component={SignIn} />
            </Switch>
        </BrowserRouter >
    )
}
export default Navigator;