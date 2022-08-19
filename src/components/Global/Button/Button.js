import React from 'react';

const Button = ({btnType, btnUrl, btnId, btnClass, btnName, btnContent}) => {
  return (
    <button type={btnType} id={btnId} className={btnClass} name={btnName}>
      <a href={btnUrl}>
      {btnContent}
      </a>
    </button>
  );
};

export default Button;