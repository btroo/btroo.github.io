import React from 'react';

import Image from '../../image.js';
import Contact from '../../contact';

import img1 from './site.jpg';

export default class HelloToken extends React.Component {
  render() {
    return (
      <div id="hellotoken">
        <h3>hellotoken (2015)</h3>
        <h4 className="subtitle">empowering publishers</h4>
        <p>
          survey distribution platform to replace display ads. worked with designs and frontend.
        </p>
        <p>
          <Contact /> for more information.
        </p>
        <Image src={img1} />
      </div>
    );
  }
}
