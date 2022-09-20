import { Component } from "react";
import Payment from "../Payment";
import "./index.css";
// import {Button} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';

class Home extends Component{
    state = {paymentUser:[],nameInput:"",mobileInput:"",emailInput:"",stateInput:"",addressOne:"",addressTwo:"",
          cityInput:"",countryInput:"",pinInput:"",card:"",expiryInput:'',cvvInput:''}

  changeName = event =>{
    this.setState({nameInput:event.target.value})
  }
  changeMobile = event =>{
    this.setState({mobileInput:event.target.value})
  }
  changeEmail = event =>{
    this.setState({emailInput:event.target.value})
  }
  changeState = event =>{
    this.setState({stateInput:event.target.value})
  }
  changeAddressOne = event =>{
    this.setState({addressOne:event.target.value})
  }
  changeAddressTwo = event =>{
    this.setState({addressTwo:event.target.value})
  }
  changeCity = event =>{
    this.setState({cityInput:event.target.value})
  }
  changeCountry = event =>{
    this.setState({countryInput:event.target.value})
  }
  changePin = event =>{
    this.setState({pinInput:event.target.value})
  }
  expiryChange = event =>{
    this.setState({expiryInput:event.target.value})
  }
  cvvChange = event =>{
    this.setState({cvvInput:event.target.value})
  }
  

  submitForm = event =>{
    console.log("hello");
    event.preventDefault();
    // const name = document.getElementById("name");
    const {paymentUser}=this.state;
    const {nameInput,mobileInput,emailInput,countryInput,cvvInput,expiryInput,cityInput,card,addressOne,addressTwo,pinInput,stateInput}=this.state;
    const newData = {
      nameInput,
      mobileInput,
      emailInput,
      countryInput,
      cityInput,
      addressOne,
      addressTwo,
      pinInput,
      stateInput,
      card,
      cvvInput,
      expiryInput,
    }
    this.setState(prevState => ({
      paymentUser:{...prevState.paymentUser,newData}
    }))
    console.log(paymentUser)
  }

  handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName,fieldIndex] = name.split("-");
  
    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (value.length >= maxLength) {

      if (fieldIntIndex < 4) {
  
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );
            this.setState(prev => ({card:prev.card + e.target.value}))

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  render(){

    const {stateInput,paymentUser}=this.state;
    console.log("fdsf",paymentUser);

  return (
    <div className="App">
        
        
        {paymentUser.length === 0 ?
      (
      <form className='main' onSubmit={this.submitForm}>
        <h3 style={{marginLeft:"150px"}}>Payment Form</h3>
        <label className="label-css" htmlFor="name">Name</label>
        <input className="in-css" id="Name" onChange={this.changeName} type="text" placeholder='Name' required/>
        <label className="label-css" htmlFor="mobile">Mobile</label>
        <input type="mobile" className="in-css" id="mobile" onChange={this.changeMobile} placeholder='Mobile' maxLength={10} pattern="[789][0-9]{9}" required/>
        <label className="label-css" htmlFor="email">Email</label>
        <input type="email" className="in-css" id="email" onChange={this.changeEmail} placeholder='Email' maxLength={40} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
        <h4>Billing Addreess</h4>
        <label className="label-css">AddressLine1</label>
        <textarea className="txt" onChange={this.changeAddressOne}  rows={4} maxLength={50} placeholder='Address 1' required/>
        <label className="label-css">AddressLine2</label>
        <textarea  className="txt" onChange={this.changeAddressTwo} rows={4} maxLength={50} placeholder='Address 2'/>
        <label className="label-css">City</label>
        <input onChange={this.changeCity} className="in-css" type="text" maxLength={15} placeholder='City'required/>
        <label className="label-css">State</label>
        <select placeholder='Select State' className="in-css" onChange={this.changeState} required>
            <option>--select--</option>
            <option defaultValue={stateInput}>Telangana</option>
            <option>Andra pradesh</option>
            <option>Tamilnadu</option>
        </select> 
        <label className="label-css">Country</label>
        <select placeholder='Select Country' className="in-css" onChange={this.changeCountry} required>
            <option>--select--</option>
            <option>India</option>
            <option>Sri lanka</option>
            <option>USA</option>
          </select>
        <label className="label-css">pincode</label>
        <input type="text" placeholder='pin code' className="in-css" required onChange={this.changePin}/>
        <label className="label-css">Payment Gateway</label>
        <label className="label-css">Card Number</label>
        <div  className="card-css">
            <InputFild name="field-1" length="4" 
                    handleChange={this.handleChange} />
            <InputFild name="field-2" length="4" 
                    handleChange={this.handleChange} />
            <InputFild name="field-3" length="4" 
                    handleChange={this.handleChange} />
            <InputFild name="field-4" length="4" 
                    handleChange={this.handleChange} />
        </div>
        <label className="label-css">Expiry Date</label>
        <input type='text' className="in-css" placeholder='Expiry Date' maxLength={7} onChange={this.expiryChange} required/>
        <label className="label-css">CVV</label>
        <input type='text' className="in-css" maxLength={3} placeholder='CVV' onChange={this.cvvChange} required/>
        <div className="btn-card">
        <button type='submit' className="btn-css">Submit</button>
        </div>
      </form>):(
                
            <Payment userData={paymentUser} />
        )}
    </div>
  );
  }
}
class InputFild extends Component {
  render() {
    return (
        <div >
      <input
        style={{ margin: 10 }}
        type="password"
        required
        name={this.props.name}
        maxLength={this.props.length}
        onChange={this.props.handleChange}
        className="card"
      ></input>
      </div>
    );
  }
}

export default Home;