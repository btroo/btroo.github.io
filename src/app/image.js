import React from 'react';
import './image.css';

export default Image = ({src, small}) => (
  <div className="portfolio-image">
    <img src={src} className={small ? 'small' : ''}/>
  </div>
)
