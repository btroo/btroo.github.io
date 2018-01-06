import React from 'react';

import { LinkDescription } from './linkDescription.js';

import Yada from './projects/yada/yada.js';
import NomzPlz from './projects/nomz/nomz.js';
import Udacity from './projects/udacity/udacity.js';
import Ephem from './projects/ephem/ephem.js';
import ArtX from './projects/artx/artx.js';

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
      </div>
    );
  }
}

export default class Portfolio extends React.Component {
  componentDidMount() {
    let prevScroll = window.pageYOffset;

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.portfolio-nav').getBoundingClientRect();
      const scrollY = window.pageYOffset;

      if(scrollY > nav.y + nav.height + scrollY + 50 && scrollY < prevScroll) {
        document.getElementById('btt').style.display = 'block';
      } else {
        document.getElementById('btt').style.display = 'none';
      }

      prevScroll = scrollY;
    })
  }

  render() {
    const works = {
      'divider1': {
        title: 'tech'
      },
      'yada': {
        desc: 'founding, design, engineering'
      },
      'buzzfeed': {
        desc: 'engineering'
      },
      'nomzplz': {
        desc: 'early team, design, engineering'
      },
      'artx': {
        desc: 'founding, branding/design, tech'
      },
      'udacity': {
        desc: 'engineering, design',
      },
      'divider2': {
        title: 'media & art'
      },
      'ephem': {
        desc: 'design, fashion, manufacturing/distribution',
      },
      'falls': {
        desc: 'film',
        src: ''
      },
      'flea': {
        desc: 'film',
        src: ''
      },
      'sleep is for the weak': {
        desc: 'film',
        src: ''
      },
      'long': {
        desc: 'film',
        src: ''
      },
    };

    const worksList = []
    for(const work in works) {
      if(work.includes('divider')) {
        worksList.push((
          <h4>{works[work].title}</h4>
        ))
      } else {
        worksList.push((
          <div>
            <a className="work-link" href={`#${work}`}>{work}</a>: {works[work].desc}
          </div>
        ));
      }
    }

    return (
      <div id="main-portfolio" className="main-portfolio">
        <h2>created:</h2>
        <nav id="portolio-nav" className="portfolio-nav">
          {worksList}
        </nav>
        <Yada />
        <LinkDescription
          id="buzzfeed"
          title="buzzfeed"
          date="2017"
          src="https://buzzfeed.com"
          desc="built out components and curation service for feeds. any feed page is powered and comprised heavily of these components and the service." />
        <NomzPlz />
        <ArtX />
        <Udacity />
        <Ephem />
        <LinkDescription
          id="sleep is for the weak"
          title="sleep is for the weak"
          date="2017"
          src="https://www.youtube.com/watch?v=8RYIxx7ZMj8"
          desc="commentary (comedy) on sleep deprivation and scarcity culture (stanford)" />
        <LinkDescription
          id="long"
          title="long"
          date="2017"
          src="https://www.youtube.com/watch?v=l26NqgLGYpA"
          desc="abstract story crafted from random unscripted iphone shots (la)" />
        <LinkDescription
          id="flea"
          title="flea"
          date="2017"
          src="https://vimeo.com/226685858"
          desc="experimenting with visual effects paired with audio (brooklyn)" />
        <LinkDescription
          id="falls"
          title="falls"
          date="2017"
          src="https://www.youtube.com/watch?v=6xKvY2xfNmg"
          desc="abstract story crafted from from random unscripted shots (yosemite, palo alto)" />
      </div>
    )
  }
}
