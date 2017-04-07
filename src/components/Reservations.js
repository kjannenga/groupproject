import React from 'react';

export default React.createClass({
  render() {
    return (
		<form className="reservations">
			<label htmlFor="name">Full Name</label>
			<input type="text" id="name" /><br />

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

			<button type="submit" >Reserve Table</button>

		</form>
    )
  }
})
