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

export function getNews(){
	axios.get('https://json-data.herokuapp.com/restaurant/news/1').then(news=>{
		store.dispatch({
			type: 'GET_NEWS',
			news: news
		})

	})
}