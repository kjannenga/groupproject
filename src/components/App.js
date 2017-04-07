import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import story from './story'
import reservation from './reservation'
import menu from './menu'
import news from './news'
import special from './special'
import main from "./main.css"
import Logo from './images/eatmygrass.jpg'




styles:{

}



export default React.createClass({

 render() {
    return (
      <Router>
		      <div>


		      <div className="header"> 
				<img className="logo" alt="logo" src={Logo} /> 
			
				<div className="navBar">
					<ul>
						<li><a href="/">Story</a></li>
						<li><a href="menu">Menu</a></li>
						<li><a href="reservation">Reservations</a></li>
						<li><a href="news">News</a></li>
						<li><a href="special">Special</a></li>
					</ul>
				</div>
				<div className="insideImg"></div>
				
			</div>

















			<div className="pages">
			

		      <Route exact={true} path="/" component={story} />
		      <Route path="/menu/" component={menu} />
		      <Route path="/reservation/" component={reservation} />
		      <Route path="/news/" component={news} />
		      <Route path="/special/" component={special} />

		    </div>
		    
		        
		        
		     
		      
			</div>
			
    </Router>
     
    )
  }
})