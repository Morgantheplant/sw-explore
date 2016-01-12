import React from '../node_modules/react'

class Widget extends React.Component {
  constructor () {
    super()
    this.state = { n: 0 }
  }
  render () {
    return <div>
      <div> User id: {this.props.uid}</div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleAgree.bind(this)}>Agree</button>
      <button onClick={this.handleDisagree.bind(this)}>Disagree</button>
      <div>Asssertion Number {this.props.aid }</div>
    </div>
  }
  handleAgree () {
    this.setState({ n: this.state.n + 1 })
  }
  handleDisagree(){
     this.setState({ n: this.state.n - 1 })
  }
}

export default Widget
