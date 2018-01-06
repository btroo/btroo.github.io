import React from 'react';

import Image from '../../image.js';
import Contact from '../../contact';

import graduatedImg from './graduated.png';
import notesImg from './notes.png';
import searchImg from './search.png';

export default class Udacity extends React.Component {
  render() {
    return (
      <div id="udacity" className="portfolio-section">
        <h3>udacity (2015-2016)</h3>
        <h4 className="subtitle">rethinking udacity's core</h4>
        <p>
          built core services that now power udacity - go, js, python.
        </p>
        <p>
          designed and developed modular dashboard (below) to allow anyone in the company
          to easily query, manipulate, and troubleshoot student data for common operations.
          saved substantial amounts of time (15-30 minute tasks reduced to 2 minute tasks),
          increasing with more feature-adds. dashboard designed to allowed easy
          addition of new data-filtering, data-sources, etc.
        </p>
        <p>
          <Contact /> for more details.
        </p>

        <Image src={graduatedImg} small={true} />
        <Image src={notesImg} small={true} />

      </div>
    )
  }
}
