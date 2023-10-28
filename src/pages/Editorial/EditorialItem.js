import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../redux/slice/cartSlice";
import './EditorialItem.css'
// import Card from "../../card/Card";
// import styles from "./ProductItem.module.scss";
// import  "../../components/product/productItem/ProductItem.css";

 
const EditorialItem = ( ) => {
 

 

  return (
     <>
     
     <div className='editorial-container'>
    <div className='pool-box'>         
       <div >    
   <Link to={`/pet`}>
   <img style={{
    width: '600px',
    height:'700px',
   }} src={require('../../assets/kid.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     <h1> Oil on Canvas
</h1>
   {/* <div>
   <div className="price-details">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/pet'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>    







      <div className='pool-box'>         
       <div >    
   <Link to={`/wedding`}>
   <img src={require('../../assets/Wedding.avif')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     <h1> Wedding, Anniversary
</h1>
   {/* <div>
   <div className="price-details">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/wedding'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>  



{/* Single */}


      <div className='pool-box'>         
       <div >    
   <Link to={`/single`}>
   <img src={require('../../assets/specialsomeone.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     <h1> Special Someone, Colored Pencil
</h1>
   {/* <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/single'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>      


    {/* Couple */}

    {/* <div className='pool-box'>         
       <div >    
   <Link to={`/couple`}>
   <img src={require('../../assets/Couple.avif')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Couple
</h1>
   <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div>
       <Link to={'/couple'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div>  */}


      {/* Family */}

    <div className='pool-box'>         
       <div >    
   <Link to={`/family`}>
   <img src={require('../../assets/Family.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Bring a family together, Charcoal
</h1>
   {/* <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/family'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 


      {/* Pet and Children */}

    <div className='pool-box'>         
       <div >    
   <Link to={`/lovedone`}>
   <img src={require('../../assets/lovedobe.jpg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Remember a loved one, Water Color
</h1>
   {/* <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/lovedone'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 



      <div className='pool-box'>         
       <div >    
   <Link to={`/generation`}>
   <img src={require('../../assets/connectgeneration1.jpeg')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
     
    <h1> Connect Generations
</h1>
   {/* <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/generation'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 

      {/* Grandparents and Children */}

    <div className='pool-box'>         
       <div >    
   <Link to={`/grand`}>
   <img src={require('../../assets/other/nature.png')} alt=""/>  
   </Link>  
     </div>   
    <div className='pool-info'>
    <div>           
    <div>
    <h1> Other, Fine Brushwork Painting
</h1>
<h3>Baby Portrait, Scenery, Landscape...</h3>
    </div>
   {/* <div>
   <div className="roomIllusion1">
      <h2>
      Small (10in x 10in | 25cm x 25cm): $139
      </h2>
      <h2>
      Medium (18in x 18in | 46cm x 46cm): $279
      </h2><h2>
      Large (25in x 25in | 64cm x 64cm): $399
      </h2>
      <h2>
      Adding person: $100/each
      </h2>       
      </div>     
     </div> */}
       <Link to={'/grand'}>
      <div className="price">
      <h2> Choose</h2> 
      </div>
      </Link>
    </div> 
    </div> 
      </div> 

      </div>
     </>
 
  );
};

export default EditorialItem;
