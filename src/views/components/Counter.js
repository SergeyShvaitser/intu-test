import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({start, reset, confirmLap}) => (
  <p>Counter</p>
)

Counter.propTypes = {
  start: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  confirmLap: PropTypes.func.isRequired,
}

export default Counter;
