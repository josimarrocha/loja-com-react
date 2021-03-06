import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();

class ProductProvider extends Component{
	state = {
		products: storeProducts,
		detailsProduct: detailProduct
	}
	handleDetail = () =>{
		console.log('hello detail')
	}
	addToCart = () =>{
		console.log('hello add to cart')
	}
	render(){
			return (
					<ProductContext.Provider value={{
							...this.state,
							handleDetail: this.handleDetail,
							handleToCart: this.addToCart
					}}>
							{this.props.children}
					</ProductContext.Provider>
			)
	}
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}