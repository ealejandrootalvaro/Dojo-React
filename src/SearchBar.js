import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {

		};
	}

	render(){
		return (

			<div>
				<h2>SearchBar</h2>
				<input type="text" onChange = {this.props.handleFilterTextInput}/>
				<br />
				<input type="checkbox" onChange = {this.props.handleInStockInput} />Stock
			</div>

		)
	}
	
}