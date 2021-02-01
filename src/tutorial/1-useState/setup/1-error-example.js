import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  // Even though the button click is executed the new title is not displayed because the component is not re rendered.
  const handleClick = () => {
    title = "Hello People";
    console.log(title);
  };

  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn"
    onClick={handleClick}>change title</button>
  </React.Fragment>
};

export default ErrorExample;
