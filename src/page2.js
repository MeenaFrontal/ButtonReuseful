// Page2.js
import React from 'react';
import Button from './Button';

const Page2 = () => {
  const handleClick = () => {
    console.log('Button clicked on Page 2');
  };

  return (
    <div>
      <h1>Page 2</h1>
      <Button label="Click me" onClick={handleClick} color="green" />
    </div>
  );
};

export default Page2;
