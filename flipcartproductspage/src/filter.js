import React, { useState } from 'react'

function Filter({ products,Handler }) {

    let [filterValue,setFilterValue]=useState('');





    function filterHnadler(e){
     let input=e.target.value;
     console.log(input);
     setFilterValue(input);
     Handler(products.filter(value=>value.title.toUpperCase().includes(input.toUpperCase())));


    }
  return (
    <div>
        <label htmlFor='filter'>Filter By : </label>
        <input value={filterValue}type='text' id='filter' placeholder='enter product name here' onChange={filterHnadler}></input>
    </div>
  )
}

export default Filter