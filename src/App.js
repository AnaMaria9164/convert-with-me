import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const baseUrl = 'https://api.apilayer.com/exchangerates_data/latest'
function App() {
  const[currencyOptions, setCurrencyOptions]=useState([])
  const[fromCurrency, setFromCurrency] = useState()
  const[toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate ] = useState()
  const[amount, setAmount] = useState(1)
  const[amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    if( typeof exchangeRate != 'undefined') {
      toAmount = amount * exchangeRate
    } else {
      toAmount = amount
    }

  } else {
    toAmount = amount
    if( typeof exchangeRate != 'undefined') {
      fromAmount = amount / exchangeRate
    } else {
      fromAmount = amount
    }
  }

useEffect(()=> {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "yFj6fdBwuKIk2fccyBi6GKzdVZzxDuwe");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  fetch(baseUrl,requestOptions)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
}, [])

useEffect(() => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "yFj6fdBwuKIk2fccyBi6GKzdVZzxDuwe");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  if (fromCurrency != null && toCurrency != null) {
    fetch(`${baseUrl}?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
    .then(res => res.json())
    .then(data => setExchangeRate(data.rates[toCurrency]))
  }
},[fromCurrency, toCurrency])

function handleFromAmountChange(e) {
  setAmount(e.target.value)
  setAmountInFromCurrency(true)
}

function handleToAmountChange(e) {
  setAmount(e.target.value)
  setAmountInFromCurrency(false)
  }  

  return (
    <>
      <h1>Convert app</h1>
      <CurrencyRow
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      onChangeAmount={handleFromAmountChange}
      amount = {fromAmount}
      />
      <div className="equals"> = </div>
      <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount = {toAmount}
            />
    </>
  );
}

export default App;
