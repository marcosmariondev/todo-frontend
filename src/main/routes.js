import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {isAuthenticated} from "../services/Auth";

import Sobre from "../pages/sobre";
import Todo from "../pages/todo/todo";
import Login from "../pages/login";
import SignUp from "../pages/SignUp";

import {logout} from "../services/Auth";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest} render={props => isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}}/>
    )}

    />
)


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/sobre" component={Sobre}/>
            <PrivateRoute path="/todo" component={Todo}/>
            <PrivateRoute path="/logout" component={logout}/>
            <Route path="*" component={ () => <h1>Page Not Found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes