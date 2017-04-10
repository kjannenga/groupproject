import React from 'react';
import {getUsers} from '../api/jsonData'
import store from '../api/store/myprojStore'
import {addUser} from '../api/jsonData'
import './reservations.css'
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


		<form onSubmit={this.handleSubmit} className="reservations">

			<label style={styles.label}  htmlFor="name">Full Name</label><br/>
			<input style={styles.input} name="username" onChange={this.update} type="text" placeholder="Name" value={this.state.res.name}/><br />

			<label style={styles.label}htmlFor="number">Number of Guests</label><br/>
			<input style={styles.input} type="text" onChange={this.update} id="number" placeholder="Number" value={this.state.res.number}/><br />

			<label style={styles.label}htmlFor="date">Date</label><br/>
			<input style={styles.input}type="date" onChange={this.update} id="date" value={this.state.res.date}/><br />

			<label style={styles.label}htmlFor="notes">Special Notes</label><br/>
			<textarea style={styles.comments}  id="notes" onChange={this.update} placeholder="Notes..." value={this.state.res.notes}></textarea><br />

			<label style={styles.label}htmlFor="seats">Seating Preference</label><br/>
			<select style={styles.input}id="seats" onChange={this.update} value={this.state.res.preference}>
			  <option value="indoor">Indoor</option>
			  <option value="outdoor">Outdoor</option>
			  <option value="bar">Bar</option>
			  <option value="first">First Available</option>
			</select>

			<br/>
			<br/>

			<button style={styles.button} type="submit">Reserve Table</button>


			</form>
		</div>
    )
  }
})
