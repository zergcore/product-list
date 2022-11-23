import React from 'react';
import ProductModal from './ProductModal';
import '../styles/ProductItem.scss'

const ProductItem = ({ product }) => {

	return (
	
		<div className="ProductItem">
			<button type="button" className="btn btn-transparent" data-bs-toggle="modal" data-bs-target={'#modal'+product.id}>
				<img src={product.images[0]} alt={product.title} />
				<div className="product-info">
					<div>
						<p>${product.price}</p>
						<p>{product.title}</p>
					</div>
				</div>
			</button>

		<ProductModal product={product}/>

		</div>
	);
}

export default ProductItem;