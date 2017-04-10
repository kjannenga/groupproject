import React from 'react';
import {getUsers} from '../api/jsonData'
import store from '../api/store/myprojStore'
import {addUser} from '../api/jsonData'
console.log('rightnow',getUsers)


const styles = {
	input:{
		width:"100%", 
		height:30,
		marginTop:10,
		background:'#DAF1E0'
	}, 

	label:{
		width: '100%',
    	marginTop: 27,
    	fontSize: 20,
    	color: 'white'
	},

	comments:{
		height:60,
		width:'100%',
		background:'#DAF1E0'	
	},

	button:{
		width: 140,
    	height: 30,
    	marginTop:20,
    	background:'#DAF1E0',
    	borderRadius:5
	},
}


export default React.createClass({
	getInitialState(){
        return{
            res:[],
            username: ''
        }
    },

componentWillMount(){
	this.unsubscribe = store.subscribe(()=>{
		const appState = store.getState()
		this.setState({
			res:appState.res
			})
		})
	getUsers()
	},

	update(e){
		e.preventDefault()
		var val = e.target.value
		this.setState({[e.target.name]: e.target.value})
	},

	handleSubmit(e){
		addUser(this.state.username)
	},

  render() {
    return (

    	<div className="res">
			<form onSubmit={this.handleSubmit} className="reservations">
				<label style={styles.label} htmlFor="name">Full Name</label>
				<input style={styles.input} name="username" onChange={this.update} type="text" placeholder="Enter Your Full Name" value={this.state.res.username}/><br />

				<label style={styles.label}  htmlFor="number">Number of Guests</label>
				<input style={styles.input}  type="text" placeholder="How Many Guests"  id="number" /><br />

				<label style={styles.label} htmlFor="date">Date</label>
				<input style={styles.input} type="date" id="date" /><br />

				<label style={styles.label} htmlFor="notes">Special Notes</label>
				<textarea style={styles.comments}  placeholder="Questions or Comments"  id="notes"></textarea><br />

				<label style={styles.label} htmlFor="seats">Seating Preference</label>
				<select style={styles.input}id="seats">
				  <option value="indoor">Indoor</option>
				  <option value="outdoor">Outdoor</option>
				  <option value="bar">Bar</option>
				  <option value="first">First Available</option>
				</select>

				<button style={styles.button} type="submit">Reserve Table</button>

			</form>
		</div>
    )
  }
})
