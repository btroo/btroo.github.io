import React from 'react';

import Image from '../../image';
import Contact from '../../contact';

import dressImg from './dress.jpg';

export default class Fill extends React.Component {
  render() {
    return (
      <div id="fill">
        <h3>fill (2018)</h3>
        <h4 className="subtitle">a dress</h4>
        <p>
          fill is a hybrid dress with tribal style influences. the upper shoulder and torso area are built up with extrusions and structure, and exude color. this saturation contrasts the gradual fade to the bottom of the dress, which remains smooth, empty, and raw. this portion is sewn separately from the upper portion of the dress and is meant to be filled, manipulated, drawn on, painted on, etc. by the wearer and others. the bottom portion is to be replaced when needed. fill emphasizes customizability and ownership in ones fashion choices. fill is heavily influenced by frankenthaler, street art, and the nguni people’s style and philosophy. spray paint and acrylic dyed on cotton canvas.
        </p>
        <p>
          <Contact /> for more thorough details or if you'd like to collaborate.
        </p>
        <Image src={dressImg} small={true} />
      </div>
    )
  }
}
