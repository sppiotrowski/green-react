import React from 'react'
import { CustomerContext } from './CustomerStore'

const FuncGreetings = ({ greetings = 'Func Greetings!' }) => {
  console.log('Func.render')
  return (
    <CustomerContext.Consumer>
      {({ customer, fetch }) => {
        console.log('FuncGreetings.Context.render')
        return (
          <div>
            <h3>{greetings}</h3>
            <p>{customer.id ? `${customer.firstName} ${customer.lastName}` : 'Mysterious Stranger'}</p>
            <p>{`Your id: ${customer.id || 'is unknown'}`}</p>
            <button onClick={fetch}>Fetch Data</button>
          </div>
        )
      }}
    </CustomerContext.Consumer>
  )
}

export default React.memo(FuncGreetings)
