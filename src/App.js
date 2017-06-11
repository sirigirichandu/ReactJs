import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import ToDo from './Components/ToDo';

class App extends Component {
	constructor(){		
		super();		
		this.state = {
			projects : [],
			toDos : []
		}
	}

	getToDos(){
		$.ajax({
			url : 'https://jsonplaceholder.typicode.com/todos',
			dataType : 'json',
			cache : false,
			success: function(data){
				this.setState({
					toDos : data
				}, function(){
					//console.log(this.state.toDos);
				});
			}.bind(this),
			error: function(xhr, status, err){
				console.log("error:" + err)
			}
		});
	}

	getProjects(){
		this.setState({
				projects : [
					{
						id : uuid.v4(),
						title : 'Angualr JS',
						Category : 'JS'
					},
					{
						id : uuid.v4(),
						title : 'React JS',
						Category : 'JS'
					},
					{
						id : uuid.v4(),
						title : 'Bootstrap',
						Category : 'CSS'
					},
					{
						id : uuid.v4(),
						title : 'HTML5',
						Category : 'HTML'
					}
				]
			}
		);
	}

	/*!
	 * life cyle method in react
	 * when we fetch data from API thru `AJAX Call`, we need to place the data in the life Cycle
	 */

	 componentDidMount(){
	 	this.getToDos();
	 }

	componentWillMount(){
		this.getProjects();
		this.getToDos();
	}

	handleAddProject(newProject){
		let Projects = this.state.projects;
		Projects.push(newProject);
		this.setState({
			projects : Projects
		});
	}

	handleDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id );
		projects.splice(index, 1);
		this.setState({
			projects : projects
		});
	}

	render() {
		return (
			<div className="container">
				<h1>My Projects </h1>     
				<AddProject addProject={this.handleAddProject.bind(this)}/>
				<Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
				<ToDo toDos={this.state.toDos}/>
			</div>
		);
	}
}

export default App;
