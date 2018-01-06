import React from 'react';

export const LinkDescription = ({id, title, date, desc, src}) => {
  return (
    <div id={id}>
      <h3>{title} ({date})</h3>
      <p>{desc}</p>
      <p>Check it out <a href={src}>here</a>.</p>
    </div>
  );
};
