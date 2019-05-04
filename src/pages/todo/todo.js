import React, {Component} from 'react'
import Header from '../../templates/header'

import SearchForm from './searchForm'
import ListForm from './listForm'

export default class todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: 'bbbbbb', list: [] }
    }

    handleChange(){

    }

    render() {

        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">

                        <div className="col-12 mb-4">
                            <h1>Todo Page</h1>
                        </div>
                        <br/>

                        <SearchForm description={this.state.description} />

                        <div className="col-12 mt-4">
                            <table className="table table-bordered">
                                <thead>
                                <th>Descrição</th>
                                <th width="130px">Ações</th>
                                </thead>

                                <tbody>

                                <ListForm />

                                </tbody>

                            </table>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}