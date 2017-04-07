import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import story from './story'
import reservation from './reservation'
import menu from './menu'
import news from './news'
import Css from './main.css'




export default React.createClass({

 render() {
    return (
      	<Router>
			<div>
				<div className="header"> 
			    	<img className="logo" src="https://files.slack.com/files-pri/T03FAV5N3-F4V4QHEF4/eatmygrass.jpg" width="600" height="150" /> 
			    </div>
			  	<div className="navBar">
			    	<ul>
			      		<li><a href="#">Story</a></li>
			      		<li><a href="#">Menu</a></li>
			      		<li><a href="#">Reservations</a></li>
			      		<li><a href="#">Labeled</a></li>
			    	</ul>
			      	<Route exact={true} path="/" component={story} />
			      	<Route path="/menu/" component={menu} />
			      	<Route path="/reservation/" component={reservation} />
			      	<Route path="/news/" component={news} />
			  	</div>
			  	<div className="responsive">
			    	<div className="mainImage">
			    	</div>
			    	<div className="mainContainer">
				      	<div id="apiDivs">
				        	<div className="newsApi">
				          		<h3>Latest News</h3>
				        	</div>
				        	<div className="specialsDiv">
				        		<h3>Today's Specials</h3>
				        	</div>
				        	<div className="locationsDiv">
				          		<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3355902079024!2d-115.15467894947072!3d36.158387479988036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c39ab244a1cb%3A0xd0b332727ed859dc!2s1112+S+Casino+Center+Blvd%2C+Las+Vegas%2C+NV+89104!5e0!3m2!1sen!2sus!4v1446084095351" ></iframe>
				        	</div>
				        </div>
			      	</div>
			    	<div className="container2">
			      		<div className="menu">
			        		<h3>Put the menu API here</h3>
				      	</div> 
				    </div>
			    </div>
			    <div className="staticDivs">
			        <h3 className="a1Text">Food Photos...</h3>
			        <div className="img">
			          <img src="http://images.neverendingvoyage.com/wp-content/uploads/2014/09/harlow-portland-vegan-2.jpg" width="300" height="200" />
			        </div>
			        <br />
			        <div className="img2">
			          <img src="https://previews.123rf.com/images/vilax/vilax1110/vilax111000216/10965505-piece-of-a-pie-from-turf-compost-with-a-green-grass-lies-on-a-plate-Isolated-Stock-Photo.jpg" width="300" height="200" />
			        </div>
			        <br />
			        <div className="img3">
			          <img src="http://simonebaldwin.com/wp-content/uploads/2013/08/GreenJuice.jpg" width="300" height="200" />
			        </div>
			    </div>
			    <div class="testHeader">
					<h2 class="testText">Testimonials</h2>
				</div>
		      	<div className="testimonials">
		        	<img className="custTest" src="https://i.ytimg.com/vi/A11XKY5pFR0/maxresdefault.jpg" />
		        	<img className="custTest" src="http://data.whicdn.com/images/72387409/superthumb.jpg" />
		        	<img className="custTest" src="https://feralbotanicals.files.wordpress.com/2012/03/cleaverkids.jpg" />
		      	</div>
		      	<div className="testTextDiv">
		        	<div className="customers">
		        		<h3>"I love grass so much that I have gone from smoking it to eating it (I still smoke it tho). Thanks, Eat My Grass!" - Bridgette, 36 </h3>
		        	</div>
		      	</div>
		      	<div className="customers">
		        	<h3>"I'm a vegan. Thanks to Eat My Grass, I can feel content knowing I'm not consuming any animal biproducts. Did I mention that I am a vegan?" - Rachel, 30.</h3>
		      	</div>
		      	<div className="customers">
		        	<h3>"This shit's fucking gross but my mom said I can't eat gluten. What the fuck is gluten?" -Billy, 10
		        	</h3>
		      	</div>

			</div>	 
		</Router>
    	)
	}
})