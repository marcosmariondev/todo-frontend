import React from 'react'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.refresh();
        }
    }

    return (

        <div className="col-12">
            <div className="card">

                <div className="card-header">
                    Formulário - <i>tips: enter cadastrastra, shift+enter: procura, esc = cancela </i>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-8">
                            <input type="text" className="form-control" value={props.description} onKeyUp={keyHandler}
                                   onChange={props.handleChange} placeholder="Digite aqui um termo..."/>

                            <i className="text-danger">{props.validationError} </i>
                        </div>

                        <div className="col-4 p-0 m-0 w-100 ">
                            <div className="btn-group " role="group" aria-label="Basic example">
                                <button onClick={props.handleAdd} type="button" className="btn btn-success"><i
                                    className="fa fa-save"></i> Salvar
                                </button>
                                <button type="button" onClick={props.handleSearch} className="btn btn-info"><i
                                    className="fa fa-search"></i> Pesquisar
                                </button>
                                <button type="button" onClick={() => props.refresh()} className="btn btn-danger"><i
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