import React from 'react';
import {getNews} from '../api/jsonData';
import store from '../api/store/myprojStore'


export default React.createClass({
	getInitialState(){
		return{
			title: [],
			post: [],
			date_published: []
		}

	},

	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				title:appState.title,
				post:appState.post,
				date_published:appState.date_published
			})
		})
		getNews()
	},

	componentWillunMount(){
		this.unsubscribe()
	},

	render(){
		
			
	)
  }
})