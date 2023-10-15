import React, { useState } from 'react'
// import '../productDetails/ProductDetails.css' 
import '../../Styles/signup.css' 
const Grand =()=>{    

  const [selectedSize, setSelectedSize] = useState('');
  const sizeOptions = [
    { label: 'Select a size', value: '' },
    { label: '8" x 12" ($139)', value: '8x12' },
    { label: '12" x 16" ($239)', value: '12x16' },
    { label: '16" x 20" ($279)', value: '16x20' },
    { label: '20" x 24" ($339)', value: '20x24' },
    { label: '24" x 30" ($379)', value: '24x30' },
    { label: '24" x 36" ($439)', value: '24x36' },
    { label: '36" x 48" ($539)', value: '36x48' },
  ];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const getPriceLink = (size) => {
    // Define the price links based on the selected size
    const priceLinks = {
      '8x12':  'https://buy.stripe.com/9AQeVwe2y1Dn8YE14D',
      '12x16': 'https://buy.stripe.com/4gw7t46A61Dngr69Ba',
      '16x20': 'https://buy.stripe.com/00g8x8e2y5TD1wc00B',
      '20x24': 'https://buy.stripe.com/5kA9Bcf6C2HreiY6p0',
      '24x30': 'https://buy.stripe.com/dR6fZA4rYa9T6Qw4gT',
      '24x36': 'https://buy.stripe.com/bIYcNo9Mieq95Ms6p2',
      '36x48': 'https://buy.stripe.com/fZe4gSgaG2Hr5Ms7t7',
    };

    return priceLinks[size] || '';
  };

  const handleButtonClick = () => {
    const selectedPriceLink = getPriceLink(selectedSize);

    if (selectedPriceLink) {
      // Redirect to the selected size's purchase link
      window.open(selectedPriceLink, '_blank');
    }
  };


  const smallImages = [  
    'https://i.postimg.cc/VvwtcgMs/nature.png',
    'https://i.postimg.cc/cJVYF0Ln/bac1.png',
    'https://i.postimg.cc/d1rCXphS/bac2.png',
     'https://i.postimg.cc/MHYQZBb7/scene.png',
   ]; 
   const [mainImage, setMainImage] = useState(smallImages[0]); // set the initial main image

   // Define a function to change the main image
   const changeMainImage = (newImage) => {
     setMainImage(newImage);
   };
 return (
    <main>
<section className='productDetailContainer'>
<div className='upContainer'>
<div className='upContent'>
<div className='upImg'>
<div style={{
  // background: `url(${mainImage})`,
    display: 'flex',
    flexDirection: 'column',
 }}>
<img id="MainImg" src={mainImage} alt="mainimage" style={{
  width: "500px", height: "400",   
}} />
<div style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            padding: '10px',
            flexDirection: 'row',
            }}>
{smallImages.map((smallImage, index) => (
        <img
          key={index}    
          style={{           
            padding: '10px'
            }}         
          src={smallImage}
          alt={`SmallImage ${index}`}
          onClick={() => changeMainImage(smallImage)} // Call the changeMainImage function
        />
      ))}
</div>
</div>
 </div>
<div className='upInfo1'>
<div className='imageInfo'>
<div className='imageInfoView'>    
{/* <h1>Paint My Life</h1> */}
<div className='detNameInfo'>
<h1><b>Others</b></h1>
{/* <p>Baby Portrait, Scenery, Landscape...</p> */}
 </div> 
 {/* <h2 className=''>Shipping fee {`$${product?.shipfee}`}</h2> */}
  

 <div className="PricesContainer">
  <p>Sizes</p>
      <select value={selectedSize} onChange={handleSizeChange} className='input'>
        {sizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="btn" onClick={handleButtonClick}>
        Purchase
      </button>
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

export default Grand;