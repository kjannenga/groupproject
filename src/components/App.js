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
			<div className="body">
		      	
		      <div className="header"> 
				<img className="logo" alt="logo" src={Logo} /> 
			
				<div className="navBar">
					<ul>
						<li><a href="/">Story</a></li>
						<li><a href="menu">Menu</a></li>
						<li><a href="Reservations">Reservations</a></li>

					</ul>
				</div>
				<div className="insideImg"></div>
				 
			</div>

			<div className="apiDivs">
				<div className="newsDiv"><News /></div>
				<div className="specialDiv"><Special /></div>
				<div  className="mapDiv">
					<iframe className="map"  width="400" height="300" src="http://www.citymaps.ie/create-google-map/map.php?width=400&amp;height=300&amp;hl=en&amp;q=1112%20S%20Casino%20Center%20Blvd%20Las%20Vegas%2C%20NV%2089104+()&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=A&amp;output=embed" scrolling="no"><a href="http://www.mapsdirections.info/fr/mesurer-distance-surface-google-maps.html"></a></iframe>
				</div>
			</div>

			<div className="pages">
		      <Route exact={true} path="/" component={Story} />
		      <Route path="/menu/" component={Menu} />
		      <Route path="/Reservations/" component={Reservations} />
			</div>

			<div className="staticDivs">
                    <h3 className="a1Text">Food Photos...</h3>
                    <div className="img1">
                      <img src="http://images.neverendingvoyage.com/wp-content/uploads/2014/09/harlow-portland-vegan-2.jpg"  alt="static" />
                    </div>
                    <br />
                    <br/>
                    <div className="img2">
                    <img src="http://simonebaldwin.com/wp-content/uploads/2013/08/GreenJuice.jpg"  alt="juice" />
                    </div>
                    <br />
                    <br/>
                    <div className="img3">
                      <img src="http://image.shutterstock.com/display_pic_with_logo/1818128/172446182/stock-photo-wheat-grass-on-a-plate-growing-wheat-grass-172446182.jpg" alt="grass" />
                    </div>
                    <br/>
                    
            </div>

            <div className="testimonials">
                <div className="testDiv">
                    <img className="custTest" src="https://i.ytimg.com/vi/A11XKY5pFR0/maxresdefault.jpg" alt="foodie" />
                    <img className="custTest" src="http://data.whicdn.com/images/72387409/superthumb.jpg" alt="green thumb" />
                    <img className="custTest" src="https://feralbotanicals.files.wordpress.com/2012/03/cleaverkids.jpg" alt="food" />
                </div>
                <div className="testTextDiv">
                    <div className="customers">
                        <h3>"I love grass so much that I have gone from smoking it to eating it (I still smoke it tho). Thanks, Eat My Grass!" - Bridgette, 36 </h3>
                    </div>
                    <div className="customers">
                        <h3>"I’m a vegan. Thanks to Eat My Grass, I can feel content knowing I’m not consuming any animal biproducts. Did I mention that I am a vegan?" - Rachel, 30.</h3>
                    </div>
                    <div className="customers">
                        <h3>"This shit’s fucking gross but my mom said I can’t eat gluten. What the fuck is gluten?" -Billy, 10
                        </h3>
                    </div>
                </div>
            </div>


		    </div>


        


		    
		    
		        
		        
		     
		      
		
			
    </Router>
     
    )
  }

})