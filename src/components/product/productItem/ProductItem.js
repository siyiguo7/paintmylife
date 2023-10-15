import React from "react";
import { Link } from "react-router-dom";


const ProductItem = () => {

  return (
     <>
     
     <div className='artwork'  id="artsection" >
    <div className='artcollectionbox'>         
       <div >    
  <div 
  // id='myDIV'
  >
  <Link to={'/pet'}>
   <img src={require('../../../assets/Animal.jpg')} alt=""/>  
   </Link>  
    </div>     
     
    </div>   
    <div className='artcollectInfo'>
    <div>           
    <h1>Paint My Life</h1>
   <div>
   <b>Pet(s)</b>    
   </div>
    {/* <p>{medium}</p> */}
      <b>$139</b> 
    </div>
    {/* <div className='artcollectIcon'    
    onClick={()=>addToCart(product)}
    ><IoBasketSharp size={24}  /></div> */}
    </div> 
      </div>           
      </div>
     </>
 
  );
};

export default ProductItem;
