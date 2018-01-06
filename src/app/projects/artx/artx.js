import React from 'react';

import Image from '../../image.js';
import Contact from '../../contact';

import img1 from './site.png';

export default class ArtX extends React.Component {
  render() {
    return (
      <div id="ArtX">
        <h3>artx (2018) (present)</h3>
        <h4 className="subtitle">bridging disciplines</h4>
        <p>
          helped found club that bridges tech and art. tech & design. designed identity guidelines. website in the works.
        </p>
        <p>
          <Contact /> for more information or if you'd like to join.
        </p>
        <Image src={img1} />
      </div>
    );
  }
}
