import React from 'react';

export default React.createClass({
  render() {
    return (
		<form>
			<label for="name">Full Name</label>
			<input type="text" id="name" />

			<label for="number">Number of Guests</label>
			<input type="text" id="number" />

			<label for="date">Date</label>
			<input type="date" id="date" />

			<label for="notes">Special Notes</label>
			<textarea id="notes"></textarea>

			<label for="seats">Seating Preference</label>
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
