import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'views/common';
import formatTime from 'utils/formatTime';

const Counter = ({currentTime, start, reset, confirmLap, isStarted}) => (
  <div>
    <p>{formatTime(currentTime)}</p>
    <Button onClick={() => start(isStarted)}>{isStarted ? 'Stop' : 'Start'}</Button>
    <Button onClick={reset}>Reset</Button>
    <Button onClick={confirmLap} disabled={!currentTime || !isStarted}>Lap</Button>
  </div>
);

Counter.propTypes = {
  currentTime: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  confirmLap: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
};

export default Counter;
