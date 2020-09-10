import React from 'react';


  const SEARCH = (props) =>{


   return(
    <section className="search">
    <input type="text" placeholder="Username" onChange={(e) => props.onChangeH(e.target.value)}></input> 
    <button  type="submit" onClick={props.submitH}>Search</button> 
  </section>
   );
}

export default SEARCH;

