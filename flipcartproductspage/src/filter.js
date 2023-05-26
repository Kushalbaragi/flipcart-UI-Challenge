import React, { useState } from 'react'

function Filter({ products,Handler }) {

    let [filterValue,setFilterValue]=useState('');
    let [min,setMin]=useState(0);
    let [max,setMax]=useState(5000);







    function filterHnadler(e){
     let input=e.target.value;
     console.log(input);
     setFilterValue(input);
     Handler(products.filter(value=>value.title.toUpperCase().includes(input.toUpperCase())));
    }

    function minHandler(e){
     let input=e.target.value;
     console.log(min);
     console.log(max);
     if(input<max){
       setMin(input);
     Handler(products.filter(value=>value.price>input && value.price<max));
     }
     else{
      alert('please select proper range');
     }
    
    }
    function maxHandler(e){
      let input=e.target.value;
     console.log(min);
     console.log(max);

     if(input>min){
     setMax(input);
      Handler(products.filter(value=>value.price<input && value.price>min));
     }
     else{
      alert('please select proper range');
     }
    }
  return (
    <div>
        <label htmlFor='filter'>Filter By : </label>
        <input value={filterValue}type='text' id='filter' placeholder='enter product name here' onChange={filterHnadler}></input>
        <label htmlFor='min'> Min-Price : </label>
        <select id='min' onChange={minHandler}>
          <option value='0'>0</option>
          <option value='500'>500</option>
          <option value='1000'>1000</option>
          <option value='1500'>1500</option>
          <option value='2000'>2000</option>
          <option value='2500'>2500</option>
        </select>
        <label htmlFor='max'> Max-Price : </label>
        <select id='max' onChange={maxHandler}>
          <option value='0'>0</option>
          <option value='500'>500</option>
          <option value='1000'>1000</option>
          <option value='1500'>1500</option>
          <option value='2000'>2000</option>
          <option value='2500'>2500</option>
        </select>
        
        
    </div>
  )
}

export default Filter