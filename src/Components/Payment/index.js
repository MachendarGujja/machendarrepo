import "./index.css"

const Payment = (props) =>{
    const {userData}=props;
    const {newData}=userData
    console.log("fdsaf",userData);
    const {nameInput,mobileInput,emailInput,countryInput,cvvInput,expiryInput,cityInput,card,addressOne,addressTwo,pinInput,stateInput}=newData;
    return(
        <div className="one-css">
            <div className="one">
       <p>Name:   {nameInput}</p>
        <p>Mobile :{mobileInput}</p>
        <p>Email: {emailInput}</p>
        
        <p>Card Number:{card}</p>
        <p>CVV :{cvvInput}</p>
        <p>Expiry Date:{expiryInput}</p>
        <p>City: {cityInput}</p>
        
        <p>AddressLine1 :{addressOne}</p>
        <p>AddressLine2 :{addressTwo}</p>
        
        <p>State: {stateInput}</p>
        <p>Country:{countryInput}</p>
        <p>pincode :{pinInput}</p>
        </div>
        </div>
    )
}
export default Payment;