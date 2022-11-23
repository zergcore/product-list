import React, {useState} from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const API='https://dummyjson.com/products';

const ProductList = () => {

	const [elements, setElements] = useState(4)

	const handleChange=(choice)=>{
			setElements(choice.target.value)
	}

	const products = useGetProducts(API);
	
	return (
		
		<section className="container my-2">
				<div className="form-floating">
					<select 
							className="form-select" 
							name='selectElements' 
							id="selectElements"
							defaultValue={4} 
							onChange={choice => handleChange(choice)}
					>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="6">6</option>
					</select>
					<label htmlFor="floatingSelect">Cuantos elementos te gustaria tener por fila?</label>
				</div>
			<div className="container my-2">
				
				<div className="row align-items-center">
					{products.map((product, i)=>(
						<>
						{elements==6 && 
							<div className="col-md-2" key={i}>
								<ProductItem product={product} key={product.id} elements={elements} />
							</div>
							}
						{elements==4 && 
							<div className="col-md-3" key={i}>
								<ProductItem product={product} key={product.id} elements={elements} />
							</div>
							}
						{elements==3 && 
							<div className="col-md-4" key={i}>
								<ProductItem product={product} key={product.id} elements={elements} />
							</div>

							}
						{elements==2 && 
							<div className="col-md-6" key={i}>
								<ProductItem product={product} key={product.id} elements={elements} />
							</div>
							}
						</>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProductList;