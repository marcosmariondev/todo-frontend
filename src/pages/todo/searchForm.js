import React, {Component} from 'react'
import { connect } from "react-redux";

import { bindActionCreators} from "redux";
import { changeDescription, search, add, clear } from "./todoActions";

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {

        const {add, search, description, clear } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
           clear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {

        const {add, search, description, clear } = this.props

        return (
            <div className="col-12">
                <div className="card">

                    <div className="card-header">
                        Formulário - <i>tips: enter cadastrastra, shift+enter: procura, esc = cancela </i>
                    </div>

                    <div className="card-body">

                        <div className="row">

                            <div className="col-8">
                                <input type="text" className="form-control" value={this.props.description} onKeyUp={this.keyHandler}
                                       onChange={this.props.changeDescription} placeholder="Digite aqui um termo..."/>

                                <i className="text-danger">{this.props.validationError} </i>
                            </div>

                            <div className="col-4 p-0 m-0 w-100 ">
                                <div className="btn-group " role="group" aria-label="Basic example">
                                    <button onClick={() => add(description)} type="button" className="btn btn-success"><i
                                        className="fa fa-save"></i> Salvar
                                    </button>
                                    <button type="button" onClick={search} className="btn btn-info"><i
                                        className="fa fa-search"></i> Pesquisar
                                    </button>
                                    <button type="button" onClick={() => clear()} className="btn btn-danger"><i
                                        className="fa fa-remove"></i> Limpar
                                    </button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({changeDescription, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)