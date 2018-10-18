import React, { Component } from 'react';
import ToDo from './ToDo';

export default class ToDoes extends Component {

	render(){
		return(
			<div className="lists-content">
				{ this.props.todoList.map( (item, index) => 
					<ToDo key={index} 
						index={index}
						value={item.value} 
						hover={item.hover}
						edit={item.edit} 
						status={item.status}
						handleMouseEnter={this.props.handleMouseEnter}
						handleMouseLeave={this.props.handleMouseLeave}
						openInput={this.props.openInput}
						blur={this.props.blur}
						changeStatus={this.props.changeStatus}
						updateToDo={this.props.updateToDo}
						inputValue={this.props.inputValue}
						stateProp={this.props.stateProp}
						changeInputValue={this.props.changeInputValue} /> 
				) }
			</div>
		);
	}
}