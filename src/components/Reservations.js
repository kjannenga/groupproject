import React from 'react';
import {getUsers} from '../api/jsonData'
import store from '../api/store/myprojStore'
import {addUser} from '../api/jsonData'
import './reservations.css'
console.log('rightnow',getUsers)


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

			<label htmlFor="name">Full Name</label><br/>
			<input name="username" onChange={this.update} type="text" placeholder="Name" value={this.state.res.name}/><br />

			<label htmlFor="number">Number of Guests</label><br/>
			<input type="text" onChange={this.update} id="number" placeholder="Number" value={this.state.res.number}/><br />

			<label htmlFor="date">Date</label><br/>
			<input type="date" onChange={this.update} id="date" value={this.state.res.date}/><br />

			<label htmlFor="notes">Special Notes</label><br/>
			<textarea id="notes" onChange={this.update} placeholder="Notes..." value={this.state.res.notes}></textarea><br />

			<label htmlFor="seats">Seating Preference</label><br/>
			<select id="seats" onChange={this.update} value={this.state.res.preference}>
			  <option value="indoor">Indoor</option>
			  <option value="outdoor">Outdoor</option>
			  <option value="bar">Bar</option>
			  <option value="first">First Available</option>
			</select>

			<br/>
			<br/>

			<button type="submit">Reserve Table</button>

			

		</form>
    )
  }
})
