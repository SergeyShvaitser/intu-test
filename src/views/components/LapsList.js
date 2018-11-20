import React from 'react';
import PropTypes from 'prop-types';
import formatTime from 'utils/formatTime';
import styled from 'styled-components'

const LapsList = ({laps}) => (
  laps.length > 0 && (
    <Wrapper>
      <h2>Laps list:</h2>
      <LapsWrapper>
        {laps.map((lap, i) => (
          <p key={i}>{`${laps.length - i}. ${formatTime(lap)}`}</p>
        ))}
      </LapsWrapper>
    </Wrapper>
  )
);

LapsList.propTypes = {
  laps: PropTypes.array.isRequired,
};

export default LapsList;

const Wrapper = styled.div`
  h2 {
    text-align: center;
    text-decoration: underline;
    color: #5b5a80;
  }
`

const LapsWrapper = styled.div`
  border: 1px solid #efe5e5;

  p {
    text-align: center;
    font-size: 20px;
    margin: 0;
    padding: 5px 0;

    &:nth-child(odd) {
      background-color: #f0eff5;
    }

  }
`
