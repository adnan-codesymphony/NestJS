import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

function Ecommerce() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setCatname] = useState("");
  

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalCategory(finalResponse);
      });
  };

  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalResponse) => {
        setFinalProduct(finalResponse.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes) => proRes.data)
      .then((finalResponse) => {
        setFinalProduct(finalResponse.products);
      });
    }
  }, [catName]);

  let pItems = finalProduct.map((products, index) => {
    return <ProductItems key={index} pdata={products} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatname={setCatname} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalProduct.length >= 1 ? pItems : "No Product Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecommerce;

function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={pdata.thumbnail} />
      <h4>{pdata.title}</h4>
      <b>Rs {pdata.price}</b>
    </div>
  );
}
