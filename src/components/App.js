import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import story from './story'
import reservation from './reservation'
import menu from './menu'
import news from './news'
import special from './special'



export default React.createClass({

 render() {
    return (
      <Router>
		      <div>


		      <div className="header"> 
				<img className="logo" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCbEQZ6R4sXcZ3MXOFHFQc07fx0xAp_cAoMRk0hNqhENR1WL2-" /> 
			<div className="navBar">
				<ul>
					<li><a href="/">Story</a></li>
					<li><a href="menu">Menu</a></li>
					<li><a href="reservation">Reservations</a></li>
					<li><a href="news">News</a></li>
					<li><a href="special">Special</a></li>
				</ul>
			

		      <Route exact={true} path="/" component={story} />
		      <Route path="/menu/" component={menu} />
		      <Route path="/reservation/" component={reservation} />
		      <Route path="/news/" component={news} />
		      <Route path="/special/" component={special} />

		      </div>
		    
		        
		        
		      </div>
		      
			</div>
			
    </Router>
     
    )
  }
})