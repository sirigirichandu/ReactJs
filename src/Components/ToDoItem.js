import React, { Component } from 'react';

class ToDoItem extends Component{	
	render(){			
		return(
			<li className="ProjectName">
				<strong>{this.props.toDoItem.title}</strong> - {this.props.toDoItem.id}
			</li>
		);
	}
}

export default ToDoItem;