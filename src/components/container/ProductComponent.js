import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import axios from "axios";
import { selectedProducts } from "../../redux/actions/productAction ";
import "./ProductComponent.css";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //useSelector Allows us to extract data from the Redux store state
  // console.log("####", products);
  const Option = Select;
  const dispatch = useDispatch();
  const [getProductDetail, setgetProductDetail] = useState();


  const fetchData = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err", err);
        
      });
      if (response.status == 200){
        setgetProductDetail(response.data)
    dispatch(selectedProducts(response.data));

      }
      
  };
  
   

  return (
    <div className="container">
      <div className="flex">
        <div className="left_side">
          <span>Select Product</span>
          <div>
            {
              <Select
                className="dropdown-category"
                onChange={(value) => {
                  fetchData(value);
                }}
              >
                {products?.map((data) => (
                  <Option key={data.id} value={data.id}>
                    {data.title}
                  </Option>
                ))}
              </Select>
            }
          </div>
        </div>

        <div className="product_in_detail">{getProductDetail ? <div>{getProductDetail.title}<br/><img src={getProductDetail.image} alt=""/>
      </div> : ""}
       </div>
      </div>
      
      <div>
        {products?.map((data) => {
          //data is just a prop(like obj) for mapping
          return (
            <div className="product-flex">
              <Link to={`/product?id=${data.id}`}  target="_blank"> 
              {/* target blank-to open the data in new tab */}
                <div>
                  <img className="for-image" src={data.image} />
                </div>
                <div>
                  <div> title :{data.title}</div>
                  <div>price : ${data.price}</div>
                  <div>category: {data.category}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductComponent;
