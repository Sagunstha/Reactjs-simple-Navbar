import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((products) => {
    // const { id, title, image, price, category } = product;
    return (
      <div key={products.id}>
        <Link to={`/product/${products.id}`}>
          <div>
            <div>
              <div>
                <img
                  className="cart-image"
                  src={products.image}
                  alt={products.title}
                />
              </div>
              <div>
                <div>{products.title}</div>
                <div>$ {products.price}</div>
                <div>{products.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
