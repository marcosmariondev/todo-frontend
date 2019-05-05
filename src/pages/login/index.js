import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import Header from '../../templates/header'

export default props => (
    <div>
        <Header />
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <h1>Login</h1>

                    <p>Formulário de login</p>
                </div>
            </div>
        </div>
    </div>
)