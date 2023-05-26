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
    <ul className='sort-wrapper'>
        <li>Sort By :</li>
        <li>Relevence</li>
        <li>Price - Low to Hight</li>
        <li>Price - Hight to Low</li>
    </ul>
  );
}

export default Sort;
