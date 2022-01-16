import React from 'react'
import './style.css'
function productdetails() {
    return (
        <div>
            <React.Fragment>
           
      

    {/* <!-- ------------ single products details -----------------  --> */}
    <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src="images/gallery-1.jpg" width="100%" id="ProductImg"/>

                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src="images/gallery-1.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="images/gallery-2.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="images/gallery-3.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="images/gallery-4.jpg" width="100%" className="small-img"/>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <p>Home / T-Shirt</p>
                <h1>₹Custom Made Shoe by ME</h1>
                <h4>$50.00</h4>
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
                <input type="number" value="1"/>
                <a href="" className="btn">Add To Cart</a>
                <h3>Product Details <i className="fa fa-indent"></i></h3>
                <br/>
                <p>Give your summer wardrobe a style upgrade with the ME Men's Active Shoe. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.
                </p>
            </div>
        </div>
    </div>

    {/* <!-- ------------title--------------  --> */}
    <div className="small-container">
        <div className="row row-2">
            <h2>Related Products</h2>
            <p>View more</p>
        </div>
    </div>

    {/* <!-- --------------products--------------  --> */}

    <div className="small-container">

        <div className="row">
            <div className="col-4">
                <img src="images/product-1.jpg"/>
                <h4>₹Custom Made Shoe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="images/product-2.jpg"/>
                <h4>₹Custom Made Shoe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="images/product-3.jpg"/>
                <h4>₹Custom Made Shoe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>

            <div className="col-4">
                <img src="images/product-4.jpg"/>
                <h4>₹Custom Made Shoe</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
                <p>$50.00</p>
            </div>
        </div>


    </div>


            </React.Fragment>
        </div>
    )
}

export default productdetails;
