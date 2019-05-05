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

                        <div className="col-9">
                            <input type="text" className="form-control" value={props.description} onKeyUp={keyHandler}
                                   onChange={props.handleChange} placeholder="Digite aqui um termo..."/>
                        </div>

                        <div className="col-3 p-0 m-0 w-100 ">
                            <div className="btn-group " role="group" aria-label="Basic example">
                                <button onClick={props.handleAdd} type="button" className="btn btn-success"><i
                                    className="fa fa-save"></i></button>
                                <button type="button" onClick={props.handleSearch} className="btn btn-info"><i
                                    className="fa fa-search"></i></button>
                                <button type="button" onClick={() => props.refresh()} className="btn btn-danger"><i
                                    className="fa fa-remove"></i></button>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}