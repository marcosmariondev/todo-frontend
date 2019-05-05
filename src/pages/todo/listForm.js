import React from 'react'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        if(!list.length)
            return <tr><td colSpan="2"><span>Não existe todo para essa pesquisa, tente outro termo</span></td></tr>

        return list.map(todo => {

            return (
                <tr key={todo.id}>
                    <td>
                        {todo.done ?
                            <del>
                                {todo.description}
                            </del> : todo.description}
                    </td>
                    <td>
                        <div className="btn-group " role="group" aria-label="Basic example">

                            {   !todo.done ?
                                <button onClick={() => props.handleCheck(todo)}
                                        className="btn btn-success "><i className="fa fa-check"></i></button>
                                :
                                <div>
                                    <button hide="true" onClick={() => props.handleUnCheck(todo)}
                                            className="btn btn-info"><i className="fa fa-undo"></i></button>

                                    <button hide="true" onClick={() => props.handleRemove(todo)}  type="button" className="btn btn-danger"><i
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
        renderRows()
    )

}

