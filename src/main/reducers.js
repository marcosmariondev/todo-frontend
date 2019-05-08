import {combineReducers} from "redux";
import todoReducer from '../pages/todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer