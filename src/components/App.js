import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Story from './story'
import Reservations from './Reservations'
import Menu from './menu'
import News from './news'
import './main.css'
import Special from './special'
import Logo from './images/eatmygrass.jpg'


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
						<li><a href="Reservations">Reservations</a></li>
						<li><a href="news">News</a></li>
						<li><a href="special">Special</a></li>
					</ul>
				</div>
				<div className="insideImg"></div>
				
			</div>






			<div className="pages">
			

		      <Route exact={true} path="/" component={Story} />
		      <Route path="/menu/" component={Menu} />
		      <Route path="/Reservations/" component={Reservations} />
		      <Route path="/news/" component={News} />
		      <Route path="/special/" component={Special} />

		    </div>

		    </div>
		    
		    
		        
		        
		     
		      
		
			
    </Router>
     
    )
  }

})