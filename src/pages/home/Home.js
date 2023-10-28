import React  from "react";
import Slider from "../../components/slider/Slider"; 
import Editorial from "../Editorial/Editorial";
import '../home/Home.css'
import FAQ from '../FAQ'
import EditorialItem from "../Editorial/EditorialItem";
const Home = () => {  
  return (
    <div className="homeContainer">
       {/* <Slider /> */}
      <section className="homeContents">         
      <div className="steps">
       <img src={require('../../assets/StepsMainLong.png')} alt="steps"/>
       </div> 
       
      <EditorialItem/>
      
      <div>
        <h1>What Makes Our Custom Paintings So Special?</h1>
        <h3>1. Handcrafted Masterpieces. We partner with great artists in creating timeless artistry.</h3>
        <h3>2. Broad Themes and Media. From nostalgic portraits to recreating cherished moments, from oil on canvas painting to color pencil, we are here to celebrate life, in unique ways, together with you.</h3>
        <h3>3. Deeply committed. We strive to provide the best service possible. Your satisfaction is our top priority.</h3>
        <br></br>
        <h1> Why choose a Custom Painting?</h1>
          <h3>Unique and Original, Emotional Connection, Storytelling, Artistic Expression and Collaboration, Interior Decor, Thoughtful gifts, Heirloom Quality and Timelessness</h3>
      </div>
      <div>
        <h3>Delivery and Return: See estimated delivery time in each media categories. Return and Exchange accepted within 30days</h3>
        </div>
        <FAQ/>
        <div>About Us: We specialize in high quality hand-made custom artworks and services.</div>
     </section>
      
     </div>
  );
};

export default Home;
