import React from 'react';

const Pragrap = ({prContent, prId, prClass}) => {
  return (
    <p className={prClass} id={prId}>{prContent}</p>
  );
};

export default Pragrap;