import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Payment from './Components/Payment';
import { Component } from 'react';


class App extends Component {
  render(){
    const {state}=this.props;
    console.log(state);
  return(
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/payment' element={<Payment/>} />
      </Routes>
      </BrowserRouter>
  )
  }
}

export default App;
