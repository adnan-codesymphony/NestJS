import React, { Component } from 'react'

class LifeCycleExample extends Component {

  constructor(props){
    super(props)
    this.state = {
        count: 0
    }
    console.log("Constructor : Component is being constructed")
  }

  componentDidMount(){
    console.log("componentDidMount : Component is now on the screen")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate : Component just updated")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount : Component is about to be removed")
  }

  render() {

    console.log("render : Component is rendering")

    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
      </div>

    )
  }
}

export default LifeCycleExample