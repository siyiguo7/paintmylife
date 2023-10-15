import { Link } from "react-router-dom";
import './CheckoutSuccess.css'
import CustomerOrder from "../Customer/CustomerOrder";
const CheckoutSuccess = () => {
  return (
    <section>
      <div className="payment-confirmation">
      <div className="confirmation-details">
         {/* <CustomerOrder/> */}
         <div>
          <img src={require('../../images/checkmark.png')} width={'40%'} height={'40%'}alt="checkmark"/>
         </div>
      </div>
      <h1>Payment Confirmation</h1>
      <p>Thank you for your payment!</p>
       
      <div className="button-container">
        <Link to={'/'}>
        <button className="btn1">Back to Home</button>
        </Link>
        <Link to={'/order-history'}>
        <button className="btn1">View all orders</button>
        </Link>
       </div>
        
    </div>
    </section>
  );
};

export default CheckoutSuccess;
