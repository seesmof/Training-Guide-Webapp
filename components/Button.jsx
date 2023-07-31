import React from "react";

const Button = ({ onClick, classes, disabled, children }) => {
  const defaultClasses = "btn";
  const mergedClasses = `${defaultClasses} ${classes}`;

  return (
    <>
      <button className={mergedClasses} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
