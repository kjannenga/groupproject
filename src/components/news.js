import React from 'react';
import {getNews} from '../api/jsonData'
import store from '../api/store/myprojStore'


export default React.createClass({

getInitialState(){
		return{
			news:[]
		}
	},

componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				news: appState.news
			})
		})
		getNews()

		
	},

	componentWillunMount(){
		this.unsubscribe()
	},



  render() {
  	// console.log("news", this.state.news)
    return (
    	<div>
    	 <div className="news">
    	 	<p>{this.state.news.title}</p>
    	 	<p>{this.state.news.post}</p>
    	 	<p>{this.state.news.date_published}</p>
                  
    		</div>
    	</div>
    )
  }
})
