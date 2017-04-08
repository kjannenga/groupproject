import React from 'react';
import {getUsers} from '../api/jsonData'
import store from '../api/store/myprojStore'
import {addUser} from '../api/jsonData'
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
			<label htmlFor="name">Full Name</label>
			<input name="username" onChange={this.update} type="text" placeholder="username" value={this.state.res.username}/><br />

			<label htmlFor="number">Number of Guests</label>
			<input type="text" id="number" /><br />

			<label htmlFor="date">Date</label>
			<input type="date" id="date" /><br />

			<label htmlFor="notes">Special Notes</label>
			<textarea id="notes"></textarea><br />

			<label htmlFor="seats">Seating Preference</label>
			<select id="seats">
			  <option value="indoor">Indoor</option>
			  <option value="outdoor">Outdoor</option>
			  <option value="bar">Bar</option>
			  <option value="first">First Available</option>
			</select>

			<button type="submit">Reserve Table</button>

			<div className="resStatus">
				{this.state.res.map(users=>
					<ul>
						<li key={users.id}>{users.username}</li>
					</ul>
				)}

			</div>

		</form>
    )
  }
})
