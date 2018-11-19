import React from 'react';
import PropTypes from 'prop-types';
import formatTime from 'utils/formatTime';

const LapsList = ({laps}) => (
  <div>
    <ul>
      {laps.map((lap, i) => (
        <li key={i}>{formatTime(lap)}</li>
      ))}
    </ul>
  </div>
);

LapsList.propTypes = {
  laps: PropTypes.array.isRequired,
};

export default LapsList;
