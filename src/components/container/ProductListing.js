import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllProducts} from "../../redux/actions/productAction ";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts()); //action import garera useeffet
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
