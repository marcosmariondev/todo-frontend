import React from 'react'
import {connect} from "react-redux";
import Moment from 'react-moment';

import {bindActionCreators} from "redux";
import {maskAsDone, maskAsPending, remove} from "./todoActions";


const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        if (!list.length)
            return <tr>
                <td colSpan="2"><span>Não existe todo para essa pesquisa, tente outro termo</span></td>
            </tr>

        return list.map(todo => {

            return (


                <tr key={todo.id}>
                    <td>
                        {todo.done ?
                            <del>
                                {todo.description}
                            </del> : todo.description}
                    </td>

                    <td><Moment format="DD/MM/YYYY HH:mm:ss">{todo.createdAt}</Moment></td>
                    <td>
                        <div className="btn-group " role="group" aria-label="Basic example">

                            {!todo.done ?
                                <button onClick={() => props.maskAsDone(todo)}
                                        className="btn btn-success "><i className="fa fa-check"></i></button>
                                :
                                <div>
                                    <button hide="true" onClick={() => props.maskAsPending(todo)}
                                            className="btn btn-info"><i className="fa fa-undo"></i></button>

                                    <button hide="true" onClick={() => props.remove(todo)} type="button"
                                            className="btn btn-danger"><i
                                        className="fa fa-remove"></i></button>
                                </div>
                            }
                        </div>
                    </td>
                </tr>
            )
        })

    }

    return (
        <div className="col-12 mt-4">

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th></th>
                    <th width="130px">Ações</th>
                </tr>
                </thead>

                <tbody>

                {renderRows()}

                </tbody>

            </table>

        </div>

    )

}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
    bindActionCreators({maskAsDone, maskAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

