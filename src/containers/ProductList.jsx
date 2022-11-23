import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const API='https://dummyjson.com/products';

const ProductList = () => {

	const products = useGetProducts(API);
	console.log(products)
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;