import React from 'react'
// import '../productDetails/ProductDetails.css' 
import '../../Styles/signup.css' 
import './PageDetail.css'
const Couple =()=>{    
 return (
    <main className='detailContainer'>
<section className='detailContent'>
  <div className='detailInfo'>
  <div className='upImg1'>
<img src={require('../../assets/Wedding.avif')} alt="imagedetail" />
</div>
 {/* <h1>Paint My Life</h1> */}
{/* <div className=''>
<h1><b>Couple</b></h1>
 </div>  */}
 {/* <h2 className=''>Shipping fee {`$${product?.shipfee}`}</h2> */}


<div className='PricesContaner1'>

 <div className='leftPriceCont1'>
 <div className='PricesCont1'>
<p>8" x 12"</p>
  <a href='https://buy.stripe.com/5kA8x87Eaa9Tgr67sG' target='blank'>
  <button className='btn'> $139  </button>
  </a>
 </div>


 <div className='PricesCont1'>
<p>12" x 16"</p>
<a href='https://buy.stripe.com/dR69Bc1fM5TDgr69AP' target='blank'>
  <button className='btn'> $239  </button>
  </a>
 </div>

 <div className='PricesCont1'>
<p>16" x 20"</p>
<a href='https://buy.stripe.com/00g6p0bUqa9TcaQ14k' target='blank'>
  <button className='btn'> $279  </button>
  </a>
 </div>
 </div>

<div className='rightPriceCont1'>

<div className='PricesCont1'>
<p>20" x 24"</p>
<a href='https://buy.stripe.com/eVa14G0bIeq9fn23ct' target='blank'>
  <button className='btn'> $339  </button>
  </a>
 </div>

 <div className='PricesCont1'>
<p>24" x 30"</p>
<a href='https://buy.stripe.com/00g4gS2jQ3Lv1wccN4'>
  <button className='btn'> $379  </button>
  </a>
 </div>

 <div className='PricesCont1'>
<p>24" x 36"</p>
<a href='https://buy.stripe.com/3csbJkaQmbdX8YE00j' target='blank'>
  <button className='btn'> $439  </button>
  </a>
 </div>
</div>
 <div className='PricesCont1'>
<p>36" x 48"</p>
<a href='https://buy.stripe.com/eVa7t41fM95PcaQ00k' target='blank'>
  <button className='btn'> $539  </button>
  </a>
 </div> 
</div>  
<div>
</div></div>     
<div className="steps">
       <img src={require('../../assets/StepsMainLong2.png')} alt="steps"/>
       </div>        
</section>
 
</main>
  )

}

export default Couple