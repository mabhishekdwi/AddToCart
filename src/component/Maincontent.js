import React from "react";
import "./style.css";

function Maincontent() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="header">
          <div className="container">
            <div className="navbar">
              <div className="col-2">
                <h1>
                  Give Your Workout<br></br>A New Style !
                </h1>
                <p>
                  Success isn't always about greatness. It's about consistency.
                  Consistent<br></br>hard work gain success. Gretness will come.
                </p>
                <a href="products.html" className="btn">
                  Explore Now &#8594;
                </a>
              </div>
              <div className="col-2">
              <img src='Images/image1.png' />
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-------------------- featured categories ----------------> */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="images/category-1.jpg" />
            </div>
            <div className="col-3">
              <img src="images/category-2.jpg" />
            </div>
            <div className="col-3">
              <img src="images/category-3.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-------------------- featured products ----------------> */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <a href="products-details.html">
              <img src="images/product-1.jpg" />
            </a>
            <a href="products-details.html">
              <h4>Brux Shoe</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹520.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-2.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹510.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-3.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹150.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-4.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>₹2250.00</p>
          </div>
        </div>

        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="images/product-5.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹450.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-6.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹250.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-7.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹350.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-8.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>₹550.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="images/product-9.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹260.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-10.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹250.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-11.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>₹450.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-12.jpg" />
            <h4>₹Custom Made Shoe</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>₹550.00</p>
          </div>
        </div>
      </div>

      {/* -- -------------offer----------- -- */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/exclusive.png"  />
            </div>
            <div className="col-2">
              <p>Exclusive Available on Shoe Store</p>
              <h1>Smart Shoes</h1>
              <small>
                The shoes is made for you guys with its sole, brightness etc, so
                everything is clear as can be.
              </small>
              <br />
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------testimonial------------------- */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <img src="images/user-1.png" />
              <h3>Sean Parker</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <img src="images/user-2.png" />
              <h3>Mike Smith</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <img src="images/user-3.png" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>
      {/* 
    <!-- -------------- brands --------------  --> */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="images/logo-godrej.png" />
            </div>
            <div className="col-5">
              <img src="images/logo-oppo.png" />
            </div>
            <div className="col-5">
              <img src="images/logo-coca-cola.png" />
            </div>
            <div className="col-5">
              <img src="images/logo-paypal.png" />
            </div>
            <div className="col-5">
              <img src="images/logo-philips.png" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Maincontent;
