import React from 'react';

export const LinkDescription = ({id, title, date, desc, src}) => {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{desc}</p>
      <p>Check it out <a href={src}>here</a>.</p>
    </div>
  );
};
