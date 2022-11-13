import React from 'react';

const ButtonSecondary = ({children}) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white">
    {children}
  </button>
  );
};

export default ButtonSecondary;