import React, { Component } from 'react';
import PropTypes from 'prop-types'
import formatTime from 'utils/formatTime';
import styled from 'styled-components'

class Counter extends Component {

  static propTypes = {
    currentTime: PropTypes.number.isRequired,
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.currentTime !== nextProps.currentTime
  }

  render(){
    return (
      <Time>{formatTime(this.props.currentTime)}</Time>
    )
  }
}

export default Counter;

const Time = styled.p`
  width: 235px;
  margin: 40px auto;
  font-size: 40px;
  color: #426882db;
`
