// AnotherPage.js
import React from 'react';
import Button from './Button';

const AnotherPage = () => {
  const handleClick = () => {
    console.log('Button clicked on Another Page');
  };

  return (
    <div>
      <h1>Another Page</h1>
      <Button label="Click me" onClick={handleClick} color="red" />
    </div>
  );
};

export default AnotherPage;
