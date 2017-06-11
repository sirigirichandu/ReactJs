import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component{

	constructor(){
		super();
		this.state = {
			newProject:{

			}
		}
	}
	static defaultProps = {
		categories : ['JS', 'CSS', 'HTML5']
	}

	handleSubmit(e){		
		if(this.refs.title.value === ''){
			alert('Title must be required')
		}else{
			this.setState({
				newProject : {
					id : uuid.v4(),
					title : this.refs.title.value,
					Category : this.refs.category.value
				}
			}, function(){
				this.props.addProject(this.state.newProject);
			});			
		}
		e.preventDefault();	
	}

	render(){
		let categoryOptions = this.props.categories.map(
				item => <option key={item} value={item}>{item}</option>
			);		
		return(
			<div className="AddProject">

				<h4>Add Project</h4>

				<form onSubmit={this.handleSubmit.bind(this)}>
					<div style={{width:'100%'}}>
						<div style={{float:'left', width:'50%'}}>
							<label style={{width:'25%'}}>Title : </label>
							<input type="text" ref="title"/>
						</div>
						<div>
							<label style={{width:'25%'}}>Category : </label>
							<select ref="category">
								{categoryOptions}
							</select>
						</div>
					</div>
					<br/>
					<input  type="submit" value="Add Project"/>
					
				</form>
			</div>
		);
	}
}


export default AddProject;