import React, { Component } from 'react';

export default class Form extends Component {
	
	render() {
    return (
    	<form onSubmit={(e) => this.props.submit(e, this.props.index)}>
    	  <input type="text" 
    	  	value={this.props.inputValue} 
    	  	onChange={ e => this.props.changeInputValue(e.target.value,this.props.stateProp) }
    	  	onBlur={this.props.value === "Update" ? (e) => this.props.blur(this.props.index, e) : () => "" } />
  			<input type="submit" value={this.props.value} />
			</form>
    );
  }
}