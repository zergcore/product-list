import React from 'react';
import '../styles/ProductItem.scss'

const ProductItem = ({ product }) => {

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;