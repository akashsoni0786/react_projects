import React, { Component } from 'react'

export class Back extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <div className='backofBill'>
        {this.props.children}
        </div>
      </header>
      </div>
    )
  }
}

export default Back