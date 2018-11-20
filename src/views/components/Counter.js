import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'views/common';
import formatTime from 'utils/formatTime';
import styled from 'styled-components'

const Counter = ({currentTime, start, reset, confirmLap, isStarted}) => (
  <div>
    <Time>{formatTime(currentTime)}</Time>
    <Actions>
      <Button onClick={() => start(isStarted)} isStarted={isStarted}>{isStarted ? 'Stop' : 'Start'}</Button>
      <Button onClick={confirmLap} disabled={!currentTime || !isStarted}>Lap</Button>
      <Button onClick={reset}>Reset</Button>
    </Actions>
  </div>
);

Counter.propTypes = {
  currentTime: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  confirmLap: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
};

export default Counter;

const Time = styled.p`
  font-size: 40px;
  text-align: center;
  color: #426882db;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`
