import React, { Component } from 'react'
import Counter from 'views/components/Counter'
import LapsList from 'views/components/LapsList'

class Stopwatch extends Component {

  constructor(){
    super()

    this.state = {
      currentTime: 0,
      laps: []
    }

    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
    this.confirmLap = this.confirmLap.bind(this)
  }

  start(){
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
    if(!this.lastLapPoint) {
      this.setState({
        laps: [this.state.currentTime, ...this.state.laps]
      })
    } else {
      this.setState({
        laps: [this.state.currentTime - this.lastLapPoint, ...this.state.laps]
      })
    }
    this.lastLapPoint = this.state.currentTime;
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
         <LapsList laps={this.state.laps} />
      </div>
    )
  }

}

export default Stopwatch
