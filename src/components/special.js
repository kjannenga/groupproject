import React from 'react';
import {getSpecial} from '../api/jsonData'
import store from '../api/store/myprojStore'

var styles = {
  h2: {
   	textAlign: 'center',
   	color:'white'
  },

  p: {
    textIndent: 25, 
 
},

divSpec: {
	
	height:300,
	textAlign:'center'
},

divImg:{
	height:180, 
	width:300,
	borderRadius:2
},

h2:{
	marginBottom:-10,
	marginTop:10,
	height: 60,
	width:380,
	marginLeft:15,
	marginTop:15,
	// textDecoration:'underline',
	background:'#DAF1E0'
	},

p:{
	marginTop:0,
	width:380,
	marginLeft:15,
	background:'#DAF1E0'
	},

}


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
		 	<div style={styles.divSpec} id="specialDiv">
		 		<h2 style={styles.h2}>Daily Specials</h2>
		 		<p style={styles.p}> Special: {this.state.special.id} Item: {this.state.special.menu_item_id}</p>
		 		<div className="img"><img style={styles.divImg}  src='http://i.telegraph.co.uk/multimedia/archive/03150/vegAlamy_3150385a.jpg' no-repeat fixed center/></div>
			</div>
    	)
  }
})
