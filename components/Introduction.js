import React from 'react';

export const Introduction = ({ text, className }) => {
  const getPerformance = () => {
    console.time('console.log performance test');

    const performance = 'performance';
    console.log(text);

    console.timeEnd('console.log performance test');

    return performance;
  };

  getPerformance();
  return <p className={className}>{text}</p>;
};
