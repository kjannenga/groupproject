import React from 'react';
import {getMenu} from '../api/jsonData';
import store from '../api/store/myprojStore'


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
				<p>Our Dinner Selection</p>
				<div className="hrule"></div>
				<h2>APPETIZERS</h2>
				<div className="hrApps"></div>
				<div className="appetizers">
					{this.state.appetizers.map(app=>(
					<div>
					<div key={'app' + app.id}>
						<p className="appName">{app.item}</p>
						<p className="appPrice">{app.price}</p>
						<p className="appDescription">{app.description}</p>
					</div>
					<div className="vRuleApps"></div>
						<div className="infoBlocks">
							<ul>
								<li>MM</li>
								<li>MM</li>
								<li>MM</li>
								<li>MM</li>
							</ul>
						</div>
					</div>
					
					))}
				</div>

				<h2>ENTREES</h2>
				<div className="hrEntres"></div>
				<div className="entrees">
					
						{this.state.entrees.map(entree=>(
						<div>
						<div key={'entr' + entree.id}>
							<p className="entName">{entree.price}</p>
							<p className="entDescription">{entree.description}</p>
						</div>
						<div className="vRuleEntrees"></div>
							<div className="infoBlocksApp">
								<ul>
									<li>MM</li>
									<li>MM</li>
									<li>MM</li>
									<li>MM</li>
								</ul>
							</div>
						</div>
					))}
				</div>

				<h2>SIDES</h2>
				<div className="hrSides"></div>
				<div className="sides">
					{this.state.sides.map(side=>(
					<div>
						<div key={'side' + side.id}>
							<p className="sideName">{side.item}</p>
							<p className="sideName">{side.price}</p>
							<p className="sideDescription">{side.description}</p>
						</div>
						<div className="vRuleEntrees"></div>
							<div className="infoBlocksApp">
								<ul>
									<li>MM</li>
									<li>MM</li>
									<li>MM</li>
									<li>MM</li>
								</ul>
							</div>
						</div>
					
					))}
				</div>



			</div>
	)
  }
})