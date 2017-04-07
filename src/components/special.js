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
    	<div>
    	 <div className="special">
    	 	<p>{this.state.special.id}</p>
    	 	<p>{this.state.special.menu_item_id}</p>  
    		</div>
    	</div>
    )
  }
})
