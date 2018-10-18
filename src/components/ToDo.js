import React, { Component } from 'react';
import edit from '../images/edit.png';
import Form from './Form';

export default class ToDo extends Component {

	render() {
		return(
			<label className={ (this.props.hover && this.props.status === 'new') || this.props.edit ? "todo hover" : "todo"}
				onMouseEnter={ () => this.props.handleMouseEnter(this.props.index) }
				onMouseLeave={ () => this.props.handleMouseLeave(this.props.index)} >
				{ this.props.status === 'done' && <span className="note">You can't edit Done ToDo! </span> }
				<div> 
					{ !this.props.edit && <span className="text"> {this.props.value} </span> }  
					{ (this.props.hover && !this.props.edit && this.props.status === 'new') && 
						<img 
							src={edit} 
							className="icImg" 
							alt="edit" 
							onClick={ () => this.props.openInput(this.props.index, this.props.value) } /> }	
					{ this.props.edit && 
							<Form 
								value="Update" 
								blur={this.props.blur} 
								index={this.props.index} 
								submit={this.props.updateToDo} 
								inputValue={this.props.inputValue}
								stateProp={this.props.stateProp}
								changeInputValue={this.props.changeInputValue} /> }
					{ !this.props.edit && 
						<div className="status">
							<span className={this.props.status} onClick={() => this.props.changeStatus(this.props.index)} > {this.props.status} </span>
						</div> }
				</div>
			</label>
		);
	}
}