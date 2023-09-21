// rafc shortcut to create function

import React from 'react';

export const List = ({ userArg }) => {
  return (
    <div>
      <ul>
        {userArg.map((item, i) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
