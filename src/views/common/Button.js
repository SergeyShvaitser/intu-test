import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  }

  shouldComponentUpdate(nextProps){
    if(this.props.disabled !== nextProps.disabled) return true
    if(this.props.isStarted !== nextProps.isStarted) return true
    return false
  }

  render(){
    return (
      <StyledButton {...this.props}>{this.props.children}</StyledButton>
    )
  }
}

export default Button;

const StyledButton = styled.button`
  width: 145px;
  font-size: 14px;
  border-radius: 0;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  background-color: ${prop => prop.isStarted ? 'red' : '#00C4A0'};
  color: white;
  border: 1px solid transparent;
  text-align: center;

  &:hover {
    opacity: .8;
  }

  &:focus {
    background-color: none;
    outline:0;
  }

  &:disabled {
    opacity: .6;
    cursor: default;
  }
`
