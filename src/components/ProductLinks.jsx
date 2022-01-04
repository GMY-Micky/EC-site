import React from "react";
import { Link } from "react-router-dom";
import "../css/productLinks.css";

const ProductLinks = () => {
  return (
    <div className="prod-container">
      <div className="product-links">
        <div className="item1">
          <img
            src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            alt="watch"
          />
          <div className="content">
            <h2>All Watches</h2>
            <div>
              <Link className="watch-link" to="/">
                Shop Men's
              </Link>
              <Link className="watch-link" to="/">
                Shop Women's
              </Link>
            </div>
          </div>
        </div>
        <div className="item2">
          <img
            src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="watch"
          />
          <div className="content">
            {" "}
            <h2>Bags</h2>
            <div>
              <Link className="bag-link" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="item3">
          <img
            src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVuaW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="watch"
          />
          <div className="content">
            <h2>Denim</h2>
            <div>
              <Link className="denim-link" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLinks;
