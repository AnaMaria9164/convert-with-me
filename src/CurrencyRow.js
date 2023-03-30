import React from 'react'

export default function CurrencyRow(props) {
  const{
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  }= props

  const options = []

  currencyOptions.forEach((option,idx) => {
    options.push(<option key={idx} value={option}>{option}</option>)
  })

  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {options}
        </select> 
    </div>
  )
}

