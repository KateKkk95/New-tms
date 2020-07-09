import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';


const Navigator = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/users-page' component={UsersPage} />
                <Route path='/' component={MainPage} />
            </Switch>
        </BrowserRouter >

    )
}
export default Navigator;