import React, { Component } from 'react';
import { Button } from 'views/common';
import styled from 'styled-components'

class Actions extends Component {

  shouldComponentUpdate(nextProps, nextState){

    let isTimeNotEqual = this.props.currentTime !== nextProps.currentTime

    if(this.props.isStarted !== nextProps.isStarted) return true
    if(isTimeNotEqual && this.props.currentTime === 0) return true
    if(isTimeNotEqual && nextProps.currentTime === 0) return true
    return false
  }

  render(){
    const { start, confirmLap, reset, currentTime, isStarted } = this.props;
    return (
      <ActionsWrapper>
        <Button onClick={() => start(isStarted)} isStarted={isStarted}>{isStarted ? 'Stop' : 'Start'}</Button>
        <Button onClick={confirmLap} disabled={!currentTime || !isStarted}>Lap</Button>
        <Button onClick={reset} disabled={!currentTime}>Reset</Button>
      </ActionsWrapper>
    )
  };

}

export default Actions;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
