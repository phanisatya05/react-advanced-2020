import React, { useState } from 'react';

const UseStateBasics = () => {
  const [value, setValue] = useState('Hello World');

  const handleClick = () => {

    if(value === 'Hello World'){
      setValue('Hello useState');
    } else {
      setValue('Hello World');
    } 
  };

  return <React.Fragment>
    <h1>{value}</h1>
    <button className='btn' onClick={handleClick}>change Title</button>
    </React.Fragment>;

};

export default UseStateBasics;
