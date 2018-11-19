
import React, { Component } from 'react'
import Counter from 'views/components/Counter'

class Stopwatch extends Component {

  constructor(){
    super()

    this.state = {
      currentTime: 0
    }

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.confirmLap = this.confirmLap.bind(this)
  }

  start(){
    console.log('works');
    this.timer = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 10
      })
    }, 10)
  }

  reset(){
    clearInterval(this.timer)
  }

  confirmLap(){

  }

  render(){
    return (
      <div>
        <h1>Awesome Stopwatch</h1>
        <Counter
          currentTime={this.state.currentTime}
          start={this.start}
          reset={this.reset}
          confirmLap={this.confirmLap}
         />
      </div>
    )
  }

}

export default Stopwatch
