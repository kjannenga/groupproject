const Initialstate = {
	appetizers: [],
	entrees: [],
	sides: [],
	news:[],
	special:[]
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
	case 'GET_SPECIAL':
		return {
			...state, special: action.special
		}
		default:
			return state
	}

}

