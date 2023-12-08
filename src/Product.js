import { useState } from "react";

function Product(Props)
 {

   let [available,setAvailable]= useState("yes")
   
    return (
        <div className="productlist">
            <img className="image" src={Props.url} alt="null" />
            <h2>{Props.Name}</h2>
            <p>{Props.Price} RS</p>
            <p>{available}</p>
            <button onClick={()=>{setAvailable("notavailable")}}>Click</button>
        </div>
    );
}

export default Product;
