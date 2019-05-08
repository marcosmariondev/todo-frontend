import React from 'react'

import Header from '../../templates/header'

import SearchForm from './searchForm'
import ListForm from './listForm'

export default props => (
    <div>
        <Header/>
        <div className="container">
            <div className="row">

                <div className="col-12 mb-4">
                    <h1>Todo Page</h1>
                </div>

                <br/>

                <SearchForm/>
                <ListForm/>

            </div>
        </div>


    </div>
)

