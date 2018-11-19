import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'views/common'
import formatTime from 'utils/formatTime'

const Counter = ({currentTime, start, reset, confirmLap}) => (
  <div>
    <p>Counter</p>
    <p>{formatTime(currentTime)}</p>
    <Button onClick={start}>Start</Button>
    <Button onClick={reset}>Reset</Button>
  </div>
)

Counter.propTypes = {
  currentTime: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  confirmLap: PropTypes.func.isRequired,
}

export default Counter;
