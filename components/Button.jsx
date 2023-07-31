import React from "react";

const Button = ({ onClick, classes, children }) => {
  const defaultClasses = "btn";
  const mergedClasses = `${defaultClasses} ${classes}`;

  return (
    <>
      <button className={mergedClasses} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
