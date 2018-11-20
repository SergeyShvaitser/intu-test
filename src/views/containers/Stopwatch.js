import React, { Component } from 'react';
import Counter from 'views/components/Counter';
import LapsList from 'views/components/LapsList';
import styled from 'styled-components'

class Stopwatch extends Component {

  constructor(){
    super();

    this.state = {
      isStarted: false,
      currentTime: 0,
      laps: []
    };

    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.confirmLap = this.confirmLap.bind(this);
  };

  start(isRunning){
    this.setState({
      isStarted: !isRunning
    });
    if(!isRunning) {
      this.timer = setInterval(() => {
        this.setState({
          currentTime: this.state.currentTime + 10
        })
      }, 10);
    } else {
      clearInterval(this.timer);
    }
  }

  reset(isReseted){
    clearInterval(this.timer);
    delete this.lastLapTime;
    this.setState({
      isStarted: false,
      currentTime: 0,
      laps: []
    });
  };

  confirmLap(){
    if(!this.lastLapTime) {
      this.setState({
        laps: [this.state.currentTime, ...this.state.laps]
      });
    } else {
      this.setState({
        laps: [this.state.currentTime - this.lastLapTime, ...this.state.laps]
      });
    }
    this.lastLapTime = this.state.currentTime;
  };

  render(){
    return (
      <Wrapper>
        <h1>Awesome Stopwatch</h1>
        <Counter
          currentTime={this.state.currentTime}
          start={this.start}
          reset={this.reset}
          confirmLap={this.confirmLap}
          isStarted={this.state.isStarted}
         />
         <LapsList laps={this.state.laps} />
      </Wrapper>
    )
  };

}

export default Stopwatch;

const Wrapper = styled.div`
  width: 500px;
  margin: auto;

  h1{
    text-align: center;
    color: #3b09a785;
    font-weight: 500;
  }
`
