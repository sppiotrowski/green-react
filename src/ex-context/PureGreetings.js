import React from 'react'
import { CustomerContext } from './CustomerStore'

export default class PureGreetings extends React.PureComponent {
  static contextType = CustomerContext
  render() {
    console.log('Greeting.Context.render')
    const { customer, fetch } = this.context
    return (
      <div>
        <h3>{this.props.greeting || 'Pure Greetings!'}</h3>
        <p>
          {customer.id
            ? `${customer.firstName} ${customer.lastName}`
            : 'Mysterious Stranger'}
        </p>
        <p>{`Your id: ${customer.id || 'is unknown'}`}</p>
        <button onClick={fetch}>Fetch Data</button>
      </div>
    )
  }
}
