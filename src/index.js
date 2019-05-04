import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import Sobre from './pages/sobre/index'
import Todo from './pages/todo/todo'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}  />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/todo" component={Todo} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));


