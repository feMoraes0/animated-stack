import React from 'react';
import './index.css';

function Button({ onPressed, text }) {
  return (
    <button onClick={onPressed} type='button' className='button'>
      {text}
    </button>
  );
}

export default Button;
