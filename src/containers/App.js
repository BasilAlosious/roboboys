import React, { Component} from 'react';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import '../containers/App.css';

class App extends Component {
	constructor(){
		super()
		 this.state = {
		robots: [],
		searchfield: ''
		}
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=> this.setState({robots:users}));
	}
	render() {
			const filteredRobots = this.state.robots.filter(robots =>{
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
			if(robots.length===0){
				return<h1> Loading</h1>
			}
			else{
				return(
				<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<ErrorBoundary>
				<CardList robots={filteredRobots}/>
				</ErrorBoundary>
				</Scroll>
				</div>
				);	
			}	
		}
}
export default App;