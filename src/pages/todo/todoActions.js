import Api from '../../services/Api';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})


export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `?term=${description}` : ''

        Api.get(`/todos${search}`)
            .then(resp => {
                dispatch({type: 'TODO_SEARCHED', payload: resp.data.data})
            })
    }


}

export const add = (description) => {

    return dispatch => {
        Api.post(`/todos`, {description: description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))

    }

}

export const maskAsDone = (todo) => {

    return dispatch => {
        Api.put(`/todos/${todo.id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }

}

export const maskAsPending = (todo) => {

    return dispatch => {
        Api.put(`/todos/${todo.id}`, {...todo, done: false})
            .then(resp => dispatch(search()))
    }

}

export const remove = (todo) => {

    return dispatch => {
        Api.delete(`/todos/${todo.id}`)
            .then(resp => dispatch(search()))
    }

}

export const clear = () => {

    return [
        {type: 'TODO_CLEAR'},
        search()
    ]

}