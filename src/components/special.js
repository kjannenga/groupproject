import React from 'react';
import {getSpecial} from '../api/jsonData'
import store from '../api/store/myprojStore'


export default React.createClass({

	getInitialState(){
		return{
			special:[]
		}
	},

	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				special: appState.special
			})
		})
		getSpecial()
	},

	componentWillunMount(){
		this.unsubscribe()
	},
  	render() {
  		console.log("special", this.state.special)
	    return (
		 	<div id="specialDiv">
		 		<h3>Daily Specials</h3>
		 		<p>{this.state.special.id}</p>
		 		<p>{this.state.special.menu_item_id}</p> 
		 		<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLvRU15SW2qjYQ1-grpdytlKtDFpntMgOw8r9KxAvGDN5jYN2b" alt="Green Shake" width="150" height="130" />
			</div>
    	)
  }
})
