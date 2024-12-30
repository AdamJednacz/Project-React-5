import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Input = ({icon, type, placeholder,onFocus,onBlur,label}) => {
  return (
      <>
      <label>{label}</label>
       <span className="input">
      <input className="input_input" type={type} placeholder={placeholder}/>
      <FontAwesomeIcon className="input_icon" icon={icon}/>
        </span>
    </>
  );
};

export default Input;
