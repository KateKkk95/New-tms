import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '..pages/Main';
import UsersPage from '..pages/Users';


const Navigator = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={MainPage} />
                <Route path='/users-page' component={UsersPage} />

            </Switch>
        </BrowserRouter >

    )
}
export default Navigator;