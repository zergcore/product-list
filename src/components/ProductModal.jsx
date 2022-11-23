import React from 'react'

function ProductModal({product}) {
  return (
    <div className="modal fade" id={'modal'+product.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{product.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
				<div className="modal-body">
					
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.images[0]} className="d-block w-100" alt={product.title}/>
                            </div>
                            <div className="carousel-item">
                                <img src={product.images[1]} className="d-block w-100" alt={product.title}/>
                            </div>
                            <div className="carousel-item">
                                <img src={product.images[2]} className="d-block w-100" alt={product.title}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
			</div>
		</div>
	</div>
  )
}

export default ProductModal