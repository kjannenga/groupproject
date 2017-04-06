const Initialstate = {
	appetizers: [],
	entrees: [],
	sides: [],
	news:[]
}

export function restaurantReducer(state = Initialstate, action) {
	switch(action.type){
	case 'GET_DATA':
		return {
			appetizers: action.menu.appetizers,
			entrees: action.menu.entrees,
			sides: action.menu.sides
		}
	case 'GET_NEWS':
		return {
			...state, news: action.news
		}
		default:
			return state
	}
}

