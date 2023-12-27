import React from 'react';
import Button from './Button';

const Page1 = () => {
  const handleClick = () => {
    console.log('Button clicked on Page 1');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Button label="Click me" onClick={handleClick} color="blue" />
    </div>
  );
};

export default Page1;
