import React, { useEffect, useState } from "react";
import product from "./data";
import Card from "./card";
import "./index.scss";
import Sort from "./Sort";

function App() {

  let [products, setProducts]=useState([]);

  useEffect(()=>{
    setProducts(product.products);
  },[])


  //   console.log(products);
  function sortHnadler(sortedData) {
    console.log(sortedData);
    setProducts([...sortedData]);
  }

  return (
    <>
      <section>
        <h1>Flipcart Product challenge</h1>
        <Sort products={products} sortHnadler={sortHnadler} />

        <div className="plp-page">
          {products.map((item) => {
            return <Card key={item.id} product={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
