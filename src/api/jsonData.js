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
			news: news.data
		})

	})
}

export function getSpecial(){
	axios.get('https://json-data.herokuapp.com/restaurant/special/1').then(special=>{
		store.dispatch({
			type: 'GET_SPECIAL',
			special: special.data
		})

	})
}


export function getUsers(){
	axios.get('http://localhost:3001/users').then(res=>{
		store.dispatch({
			type: 'GET_USERS',
			res: res.data 
		
		})

	})
}

// export function addName(name){
// 	axios.post('http://localhost:3001/users', {
// 		name, 
// 	}).then(res=>
// 		getName()
// 	)
// }


