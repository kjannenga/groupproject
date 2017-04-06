import axios from 'axios'
import store from './store/newsStore'

export function getNews(){
	axios.get('https://json-data.herokuapp.com/restaurant/news/1').then(data=>{
		store.dispatch({
			type: 'GET_DATA',
			news: data.data
		})
	})
}