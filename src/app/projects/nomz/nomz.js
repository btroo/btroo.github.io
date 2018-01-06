import React from 'react';

import Image from '../../image';
import Contact from '../../contact';

import mock1 from './profileReg.jpg';
import mock2 from './listicle.png';
import mock3 from './realProfile.png';

export default class NomzPlz extends React.Component {
  render() {
    return (
      <div id="NomzPlz">
        <h3>nomzplz (2017)</h3>
        <h4 className="subtitle">a better food discovery</h4>
        <p>involvement: design, engineering</p>
        <p>
          building with help from Pear Ventures. dish-granular food discovery, search, blog, articles, automated. got to ~500 users in a couple months. python, react.
        </p>
        <p>
          i designed and built out the <a href="http://www.nomzplz.com/">web app</a>.
        </p>
        <p>
          the app and web app focused on providing a user with something
          that they would want to eat as quickly as possible. inherently we
          iterated on a visual focus that's powered even further by instantly
          searchable content (you can search through an individual person or location's
          food feed and find a *dish* you want).
        </p>
        <p>
          <Contact /> if you'd like to hear about the design and development process.
        </p>
        <Image src={mock1} />
        <Image src={mock2} />
        <Image src={mock3} />
      </div>
    )
  }
}
