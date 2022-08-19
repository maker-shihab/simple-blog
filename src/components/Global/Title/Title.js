import React from 'react';

const Title = ({tiId, tiClass, tiContent}) => {
  return (
    <h2 id={tiId} className={tiClass}>{tiContent}</h2>
  );
};

export default Title;