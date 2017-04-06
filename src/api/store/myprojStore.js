import {createStore} from 'redux'
import {menuReducer} from '../reducers/myprojReducers'


const store = createStore(menuReducer)

export default store