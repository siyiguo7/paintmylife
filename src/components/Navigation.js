import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
  import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { IoBasketSharp, } from 'react-icons/io5';
import '../Styles/Navigation.css' 
import { useDispatch, useSelector } from "react-redux";
  import { CALCULATE_TOTAL_QUANTITY, selectCartTotalQuantity } from "../redux/slice/cartSlice";
 import { auth } from "../firebase/config";
  
  

 

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
   const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);
  // Monitor currently sign in user
   

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const cart = (
     <div className="NavCartIcont">
        <span  >
      <Link to="/cart">
         <IoBasketSharp className='NavCartIcon'/>
        <p>{cartTotalQuantity}</p>
       </Link>
    </span>
     </div>
  );
  return (
  <>
  <div className="homeScreen">
<headers>
<nav className='navbar'>
{/* Logo */}
<div className='logoHolder'>
<a href='/'>
<img src={require('../assets/logos/pml2.png')} width={'100%'}  height={50} alt='Art-Hub Logo' />
</a>
</div>
{/* sereach bar */}
{/* <div className='searchBar'>
<input type='text' placeholder='Search by artirst, style, tag and more' />
</div> */}
<div>
{/* navigation menu */}
<ul className='nav-links'>
{/* uising checkbox hack */}
<input type='checkbox' id='checkbox_toggle'/>
<label for='checkbox_toggle' className='hamburger'>&#9776;</label>
{/* navigation menu */}
<div className='menu'>
 {/* <li className='services'>
<a href='/artist' className='navName'>Artist</a>
</li>
<li className='services' id='navDrop'>
<a href='/gallery' className='navName'>Artworks</a>
</li> */}
  
 {/* <AdimRoute>
 <li><a href="/adminpage" className='navName'>Admin</a></li>  
 </AdimRoute> */}
 
 
 
{/* <li><a href="/profile" className='navName'>Profile</a></li>   */}

 
 <li className='services' id='profileNav'>           
 
 
</li>                     
  </div>  
</ul> 
</div>
</nav>
</headers>
</div> 
  
  </>
     
  );
};

export default Header;
