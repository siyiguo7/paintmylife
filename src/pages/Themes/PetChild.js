import React from 'react'
// import '../productDetails/ProductDetails.css' 
import '../../Styles/signup.css' 
const PetChild =()=>{    
 return (
    <main>
<section className='productDetailContainer'>
<div className='upContainer'>
<div className='upContent'>
<div className='upImg'>
<img src={require('../../assets/generation.JPG.png')} alt="imagedetail" />
</div>
<div className='upInfo1'>
<div className='imageInfo'>
<div className='imageInfoView'>    
{/* <h1>Paint My Life</h1> */}
<div className='detNameInfo'>
<h1><b>Bring a family together</b></h1>
 </div> 
 {/* <h2 className=''>Shipping fee {`$${product?.shipfee}`}</h2> */}
  

<div className='PricesContaner'>

 <div className='leftPriceCont'>
 <div className='PricesCont'>
<p>8" x 12"</p>
  <a href='https://buy.stripe.com/aEU4gSaQmdm5gr63cE' target='blank'>
  <button className='btn'> $139  </button>
  </a>
 </div>


 <div className='PricesCont'>
<p>12" x 16"</p>
<a href='https://buy.stripe.com/5kAcNo8Ie81L5MsbJb' target='blank'>
  <button className='btn'> $239  </button>
  </a>
 </div>

 <div className='PricesCont'>
<p>16" x 20"</p>
<a href='https://buy.stripe.com/28o8x85w2ci1caQ9B4' target='blank'>
  <button className='btn'> $279  </button>
  </a>
 </div>
 </div>

<div className='rightPriceCont'>
 <div className='PricesCont'>
<p>20" x 24"</p>
<a href='https://buy.stripe.com/00g28KcYu5TDgr6fZt' target='blank'>
  <button className='btn'> $339  </button>
  </a>
 </div>

 <div className='PricesCont'>
<p>24" x 30"</p>
<a href='https://buy.stripe.com/9AQfZA3nUeq9gr6cNi' target='blank'>
  <button className='btn'> $379  </button>
  </a>
 </div>

 <div className='PricesCont'>
<p>24" x 36"</p>
<a href='https://buy.stripe.com/cN29Bc3nU6XH1wc9B7' target='blank'>
  <button className='btn'> $439  </button>
  </a>
 </div>
</div>

 <div className='PricesCont'>
<p>36" x 48"</p>
<a href='https://buy.stripe.com/9AQ3cO0bI95PeiY6oW' target='blank'>
  <button className='btn'> $539  </button>
  </a>
 </div>
 
</div>

 
 
<div>

</div>
 </div>  
</div>
</div>
</div>      
</div>
</section>
<div style={{
  height: 'auto', width:'70%',
  margin: 'auto',
 }}>
       <img src={require('../../assets/StepsMainLong2.png')} width={'100%'} alt="steps"/>
       </div>
</main>
  )

}

export default PetChild