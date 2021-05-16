import React from 'react';
/* import { Link } from 'react-router-dom'; */

import './Button.css';

const styles = ['btn--primary', 'btn--outline', 'btn--test'];

const sizes = ['btn--medium', 'btn--large', 'btn--small'];
//if the cutting component has a button style, if that is true,then be the btn style that we created, and if it is not true, set the value to style the first option in our styles
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  //by default the button is btn--medium
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
  //button children, whatever we put inside that, is going to get rendered
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
