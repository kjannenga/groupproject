import React from 'react';
import {getNews} from '../api/jsonData'
import store from '../api/store/myprojStore'

var styles = {
  h2: {
  	height:80,
   	textAlign: 'center',
   	lineHeight:3,
   	background:'#DAF1E0'
  },

  p: {
    textIndent: 25,
},

divNews: {
	
	height:274,
	width:380,
	marginLeft:15,
	overflow: 'hidden',
	textOverflow: 'elipsis'

},
 
};


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
	    	<div style={styles.divNews} id="news">
	    	 	<h2 style={styles.h2}>{this.state.news.title}</h2>
	    	 	<p style={styles.p}>{this.state.news.post}</p>
	    	 	<p>{this.state.news.date_published}</p>
	                  
	    	</div>
    	)
  	}
})
