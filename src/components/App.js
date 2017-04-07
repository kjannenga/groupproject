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
						<li><a href="reservations">Reservations</a></li>
						
					</ul>
				</div>
				<div className="insideImg"></div>
				
			</div>
			<div className="apiDivs">
				<div className="newsDiv"><News /></div>
				<div className="specialDiv"><Special /></div>
				<div className="mapDiv">
					<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3355902079024!2d-115.15467894947072!3d36.158387479988036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c39ab244a1cb%3A0xd0b332727ed859dc!2s1112+S+Casino+Center+Blvd%2C+Las+Vegas%2C+NV+89104!5e0!3m2!1sen!2sus!4v1446084095351">
					</iframe>
				</div>

			</div>







			<div className="pages">
			

		      <Route exact={true} path="/" component={Story} />
		      <Route path="/menu/" component={Menu} />
		      <Route path="/Reservations/" component={Reservations} />

		    </div>

		    </div>
		    
		    
		        
		        
		     
		      
		
			
    </Router>
     
    )
  }

})