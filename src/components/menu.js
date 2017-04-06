import React from 'react';
import {getMenu} from '../api/jsonData';
import store from '../api/store/myprojStore'
import menu from './menu.css'


export default React.createClass({
	getInitialState(){
		return{
			appetizers: [],
			entrees: [],
			sides: []
		}
	},

	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			this.setState({
				appetizers:appState.appetizers,
				entrees:appState.entrees,
				sides:appState.sides
			})
		})
		getMenu()
	},

	componentWillunMount(){
		this.unsubscribe()
	},

	render(){
		return(
			<div className="menu">
				<div className="dinnerSel">
					<p >Our Dinner Selection</p>
				</div>
				<div className="hrule"></div>
				<div className="appsTitle"><p>APPETIZERS</p></div>
				<div className="hrApps"></div>
				<div className="appetizers">
					{this.state.appetizers.map(app=>(
					<div key={'app' + app.id} className="appetizers">
					<div className="appList" >
						<ul>
							<li>
								<div className="titlePrice">
								<div className="appName"><h3>{app.item}</h3></div>
								<div className="appTitle"><p className="appPrice">{app.price}</p></div>
								</div>
								
							</li>
						</ul>
					</div>
						<div className="rightSideMenu">
							<div className="appDescription"><p 
							>{app.description}</p></div>
							<div className="vertRuleApps"></div>
							<div className="infoBlocks">
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
					</div>
					
					))}
				</div>

				
				<div className="hrEntres"></div>
				<div className="entreeTitle"><p>ENTREES</p></div>
				<div className="hrApps"></div>
				<div >
					{this.state.entrees.map(entree=>(
					<div key={'entree' + entree.id} className="entrees">
					<div className="appList" >
						<ul>
							<li>
								<div className="titlePrice">
								<div className="appName"><h3>{entree.item}</h3></div>
								<div className="appTitle"><p className="appPrice">{entree.price}</p></div>
								</div>
								
							</li>
						</ul>
					</div>
						<div className="rightSideMenu">
							<div className="appDescription"><p 
							>{entree.description}</p></div>
							<div className="vertRuleApps"></div>
							<div className="infoBlocks">
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
					</div>
					
					))}
				</div>

				<div className="sidesTitle"><p>SIDES</p></div>
				<div className="hrSides"></div>
				<div >
					{this.state.sides.map(side=>(
					<div key={'side' + side.id} className="sides">
					<div className="appList" >
						<ul>
							<li>
								<div className="titlePrice">
								<div className="sidesName"><h3>{side.item}</h3></div>
								<div className="vertRuleSides"></div>

								<div className="appTitle"><p className="appPrice">{side.price}</p></div>
								</div>			
							</li>

						</ul>
					</div>
						<div className="rightSideMenu">

							<div className="appDescription"><p 
							>{side.description}</p></div>
							
							
						</div>
						<div className="sideInfoBlocks">
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
					</div>
					
					))}
				</div>



			</div>
	)
  }
})