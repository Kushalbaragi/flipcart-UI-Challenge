import React, { useEffect, useState } from "react";
import product from "./data";
import Card from "./card";
import "./index.scss";
import Sort from "./Sort";
import Filter from "./filter";

function App() {

  let [products, setProducts]=useState([]);
  let [filterProducts,setFilterProducts]=useState([]);

  useEffect(()=>{
    setProducts(product.products);
    setFilterProducts(product.products);
  },[])


  //   console.log(products);
  function Handler(sortedData) {
    // console.log(sortedData);
    setFilterProducts([...sortedData]);
  }



  return (
    <>
      <section>
        <h1>Flipcart Product challenge</h1>
        <Sort products={products} Handler={Handler} />
        <Filter products={products} Handler={Handler} />

        <div className="plp-page">
          {filterProducts.map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
