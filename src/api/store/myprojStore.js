	import {createStore} from 'redux'



	// const rootReducer = combineReducers({
	// 	menuReducer, newsReducer
	// })
	// const store = createStore(rootReducer)

	// export default store

import {restaurantReducer} from '../reducers/myprojReducers'


const store = createStore(restaurantReducer)

export default store