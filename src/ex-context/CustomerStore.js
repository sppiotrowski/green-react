import React from 'react'
import mock from './mock'

// context type definition
// default value: {} only for components without CustomerStore as a parent
export const CustomerContext = React.createContext({
  customer: {},
  fetch: id => ({}),
})

// Statefull component for kepping the store
export default class CustomerStore extends React.Component {
  constructor(props) {
    super(props)

    // looks like redux reducer...
    const fetch = id => {
      console.log('CustomerStore.fetch')
      this.setState({ customer: mock.fetch() })
    }

    // looks like redux store...
    this.state = {
      customer: {},
      fetch,
    }
  }

  render() {
    console.log('CustomerStore.render')
    return (
      <CustomerContext.Provider value={this.state}>
        {this.props.children}
      </CustomerContext.Provider>
    )
  }
}
