import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDo extends Component{
	
	render(){		
		
		let ToDoItems;

		if(this.props.toDos){
			ToDoItems = this.props.toDos.map( 				
				toDoItem => <ToDoItem key={toDoItem.id} toDoItem={toDoItem} />
			);
		}

		return(
			<div className="Project">
				<h2>Data fetched from the `JSON` Placeholder API</h2>
				<ul>
					{ToDoItems}
				</ul>
			</div>
		);
	}
}

export default ToDo;