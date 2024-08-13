import React, { useState } from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { TbBoxMargin } from 'react-icons/tb';
import axios from 'axios';

function Currency() {
  const [amount,setAmount]=useState(0);
  const[fromCurrency, setFromCurrency]= useState('USD');
  const[toCurrency, setToCurrency] = useState('TRY');
  const[result, setResult] = useState(0);

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_A7jrwyNjl5mSplPYzljXsz1Olj63K0xqrtyF5TcW";
  

  const exchange = async ()=>{
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   setResult((response.data.data[toCurrency]*amount).toFixed(2));
  }
  

  return (
    <div className='currency-div'>
      <div>
        <h3 style={{fontFamily: 'arial',backgroundColor:'black', color:'#fff',width:'100%', textAlign:'center '}}>Currency Converter Application</h3>
      </div>
      <div style={{marginTop: '25px'}}>
      <input
      value={amount}
      onChange={(e)=> setAmount(Number(e.target.value))}
      type = "number" className='amount'/>

      <select onChange ={(e)=> setFromCurrency(e.target.value)} className='from-currency-option'>
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
      <FaRegArrowAltCircleRight style={{fontSize: '25px', marginRight:'10px', marginTop:'5px'}} />

      <select onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
      <option>TRY</option>
      <option>EUR</option>
      <option>USD</option>
      </select>

      <input value={result} type="number" className='result' readOnly />
      </div>

<div>
  <button
  onClick={exchange} className='exchange-button'>Convert</button>
</div>

    </div>
  )
}
export default Currency
//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_A7jrwyNjl5mSplPYzljXsz1Olj63K0xqrtyF5TcW&base_currency=EUR