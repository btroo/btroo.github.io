import React from 'react';

import Image from '../../image.js';
import Contact from '../../contact';

import basicImg from './basic.png';
import chatImg from './chat.png';

export default class Yada extends React.Component {
  render() {
    return (
      <div id="yada">
        <h3>yada (2017-2018) (current)</h3>
        <h4 className="subtitle">a scalable workforce at your fingertips.</h4>
        <p>heading up design & engineering.</p>
        <p>
          <Contact /> for a real run-down.
        </p>
        <Image src={chatImg} />
        <Image src={basicImg} />
      </div>
    )
  }
}
