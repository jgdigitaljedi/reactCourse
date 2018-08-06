import React from 'react';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default userInput;