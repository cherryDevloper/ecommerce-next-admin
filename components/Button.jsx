import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-3 w-[100px] text-center justify-center bg-orange-400 rounded-md text-white"
    >
      {text}
    </button>
  );
};

export default Button;
