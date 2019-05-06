import React from 'react'

export default props => (
    <div
        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Trello de Pobre</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="/todo">Todo</a>
            <a className="p-2 text-dark" href="/sobre">Sobre</a>
            <a className="p-2 text-dark" href="/logout">Sair</a>
        </nav>
    </div>
)