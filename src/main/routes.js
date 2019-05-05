import React from 'react'

//versao do routes para browser/ route define uma rota/ switch nao deixa mais de uma rota chamada ao msm tempo
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


import Sobre from "../pages/sobre";
import Todo from "../pages/todo/todo";
import Login from "../pages/login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}  />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/todo" component={Todo} />
        </Switch>
    </BrowserRouter>
)

export default Routes