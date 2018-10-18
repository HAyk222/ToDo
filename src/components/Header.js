import React, { Component } from 'react';

export default class Header extends Component {
	render() {
    return (
    	<div>
    		<h2> To Do List </h2>
    		<p>Total {this.props.count} todo</p>
    	</div>
    );
  }
}