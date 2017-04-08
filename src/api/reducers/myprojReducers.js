const Initialstate = {
	appetizers: [],
	entrees: [],
	sides: [],
	news:[],
	special:[],
	res:[]
}

export function restaurantReducer(state = Initialstate, action) {
	switch(action.type){
	case 'GET_DATA':
		return {
			...state,
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
	case 'GET_USERS':
		return{
			...state, res: action.res
		}

		default:
			return state
	}

}


