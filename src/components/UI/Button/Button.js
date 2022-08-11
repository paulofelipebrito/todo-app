import React from 'react';

import {ButtonContainer} from './styles';

const Button = props => {
  return (
    <ButtonContainer type={props.type} onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;