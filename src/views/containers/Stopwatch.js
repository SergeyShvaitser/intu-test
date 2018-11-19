
import React, { Component } from 'react'
import Counter from 'views/components/Counter'

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
        <Counter
          start={this.start}
          reset={this.reset}
          confirmLap={this.confirmLap}
         />
      </div>
    )
  }

}

export default Stopwatch
