import axios from 'axios'
import store from './store/myprojStore'

export function getMenu(){
	axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(data=>{
		store.dispatch({
			type: 'GET_DATA',
			menu: data.data
		})
	})
}