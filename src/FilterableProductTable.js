import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';


export default class FilterableProdductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText:'',
			inStockOnly: false
		};
		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
	}
	handleFilterTextInput(filterText) {
		console.log(filterText.target.value);

		let text = filterText.target.value;

		this.setState({
			filterText: text
		});
	}

	handleInStockInput(inStockOnly) {
		console.log(inStockOnly.target.checked);
		this.setState({
			inStockOnly: inStockOnly.target.checked
		});
	}

	render() {
		return(
				
				<div>
					<SearchBar handleFilterTextInput={this.handleFilterTextInput} handleInStockInput={this.handleInStockInput}/>
					<ProductTable products={this.props.store}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}/>
					
				</div>
			);
	}
}