import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../redux/actions/productAction ";
import { removeselectedProducts } from "../../redux/actions/productAction ";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log("pid:", productId);
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeselectedProducts());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div>
            <div>
              <div>
                <img src={image} />
              </div>
              <div>
                <h1>{title}</h1>
                <h2>
                  <a>${price}</a>
                </h2>
                <h3>{category}</h3>
                <p>{description}</p>
                <div>
                  <div>
                    <i></i>
                  </div>
                  <div>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
