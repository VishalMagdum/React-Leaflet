import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { employeesReducer, employeeDetailsReducer } from './reducer/reducer'

const reducer = combineReducers({
    allEmployees: employeesReducer,
    employee: employeeDetailsReducer

})
let initialState = {

}

const middlerware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlerware))
);
export default store;