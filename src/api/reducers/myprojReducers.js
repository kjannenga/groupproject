
const Initialstate = {
	appetizers: [],
	entrees: [],
	sides: []
}

export function menuReducer(state = Initialstate, action) {
	switch(action.type){
	case 'GET_DATA':
		return {
			appetizers: action.menu.appetizers,
			entrees: action.menu.entrees,
			sides: action.menu.sides
		}
		
		default:
			return state
	}
}