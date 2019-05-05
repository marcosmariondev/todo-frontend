import React, {Component} from 'react'
import Api from '../../main/Api';

import Header from '../../templates/header'

import SearchForm from './searchForm'
import ListForm from './listForm'

export default class todo extends Component {

    constructor(props) {
        super(props)
        this.state = {description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh = this.refresh.bind(this)

        this.handleCheck = this.handleCheck.bind(this)
        this.handleUnCheck = this.handleUnCheck.bind(this)

        this.refresh()
    }

    refresh(description = '') {

        let value_default = description ? description : ''

        Api.get('/todos')
            .then(res => {
                this.setState({ description: value_default,  list: res.data.data });
            })
    }

    handleChange(e) {
        const val = e.target.value
        this.setState({ ...this.state, description: val})
    }

    handleCheck(todo) {
        Api.put(`/todos/${todo.id}`, { ...todo, done:true})
            .then(res => this.refresh(this.state.description))
    }

    handleUnCheck(todo) {
        Api.put(`/todos/${todo.id}`, { ...todo, done:false})
            .then(res => this.refresh(this.state.description))
    }

    handleAdd() {
        Api.post('/todos', {description: this.state.description})
            .then(res => this.refresh(this.state.description))
    }

    handleRemove = (todo) => {
        Api.delete(`/todos/${todo.id}`)
            .then(res => this.refresh())
    }

    handleSearch = () => {

        Api.get(`/todos?term=${this.state.description}`)
            .then(res => {
                this.setState({ ...this.state,  list: res.data.data });
            })
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

                        <SearchForm handleAdd={this.handleAdd}
                                    handleChange={this.handleChange}
                                    refresh={this.refresh}
                                    handleSearch={this.handleSearch}
                                    description={this.state.description}/>

                        <div className="col-12 mt-4">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th width="130px">Ações</th>
                                    </tr>
                                </thead>

                                <tbody>

                                <ListForm
                                    handleCheck={this.handleCheck}
                                    handleUnCheck={this.handleUnCheck}
                                    handleRemove={this.handleRemove}
                                    list={this.state.list}
                                />

                                </tbody>

                            </table>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}