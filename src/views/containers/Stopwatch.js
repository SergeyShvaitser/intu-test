
import React, { Component } from 'react'

class Stopwatch extends Component {

  constructor(){
    super()

    this.state = {}

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.confirmLap = this.confirmLap.bind(this)
  }

  start(){

  }

  reset(){

  }

  confirmLap(){

  }

  render(){
    return (
      <div>
        <h1>Awesome Stopwatch</h1>
      </div>
    )
  }

}

export default Stopwatch
