import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../redux/actions/productAction ";
import { removeselectedProducts } from "../../redux/actions/productAction ";

import axios from "axios";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const location = useLocation();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState();

  const productId = queryString.parse(location.search)?.id;
  console.log("pid", productId);

  const fetchProductDetails = async (productId) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    if (response.status == 200) {
      setProductDetails(response.data);
      dispatch(selectedProducts(response.data));
    }

  };
  console.log("first",productDetails)

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails(productId);
    return () => {
      dispatch(removeselectedProducts());
    };
  }, [productId]);
  

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="loading-pos"></div>
      ) : (
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img className="for-image" src={product.image} />
              </div>
              <div>
                <p>{product.title}</p>
                {/* or of we define  const { image, title, price, category, description } = product; then
                only {title} {price} can be done*/}
                <p>
                  <a>${product.price}</a>
                </p>
                <p>{product.category}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
