import React from "react";

function Sort({ products,Handler }) {
  function sortingbyName(a, b) {
    a = a.title.toUpperCase();
    b = b.title.toUpperCase();

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
  function sortingbyprice(a, b) {
    return a.price - b.price;
  }
  function sortingbyrating(a, b) {
    return b.rating - a.rating;
  }

  // console.log(products);
//   products = products.sort(sortingbyprice);
//   console.log(products);
function selectHandler(e){
    if(e.target.value==='name'){
        Handler(products.sort(sortingbyName));
    }
    else if(e.target.value==='price'){
        Handler(products.sort(sortingbyprice));
    }
    else if(e.target.value==='rating'){

        Handler(products.sort(sortingbyrating));

    }

}

  return (
  <>
  <label htmlFor='sorting'>SORT BY : </label>
  <select id='sorting' onChange={selectHandler}>
   
    <option> select the sorting</option>
    <option value='name'>sort by name</option>
    <option value='price'>sort by price</option>
    <option value='rating'>sort by rating</option>

  </select>
  </>
  );
}

export default Sort;
