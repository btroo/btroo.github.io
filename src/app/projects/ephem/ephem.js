import React from 'react';

import Image from '../../image';
import Contact from '../../contact';

import hotline from './hotline.png';
import iam from './iam.png';
import archephem from './archephem.png';
import og from './og.jpg';
import iamReg from './iamreg.png';
import sample2 from './sample2.jpg';
import iamSpaced from './iamspaced.png';
import sampleFinal from './sampleFinal.jpg';

import user1 from './users/1.jpg';
import user2 from './users/2.png';
import user3 from './users/3.jpg';
import user4 from './users/4.jpg';
import user5 from './users/5.jpg';

export default class Ephem extends React.Component {
  render() {
    return (
      <div id="ephem">
        <h3>ephem (2016-2017)</h3>
        <h4 className="subtitle">dipping my toes into clothing</h4>
        <p>
          experiment with branding and fashion. created basic brand identity
          and saw hat design from ideation to production and sales. i made a <a href="http://ephem.us">website</a>. completely offline sales process. profitable.
        </p>
        <p>
          currently taking a deeper dive into clothing and manufacturing now that i've deprecated this project.
        </p>
        <p>
          <Contact /> for more thorough details or if you'd like to collaborate.
        </p>
        <h4>process</h4>
        <p>this goes chronologically through the development of the final design. it was my first time working with hats/fabrics/etc. intentionally messy.</p>
        <Image src={hotline} />
        <Image src={og}/>
        <Image src={iamReg} />
        <Image src={archephem} />
        <Image src={sample2} />
        <Image src={iamSpaced} />
        <Image src={sampleFinal} />
        <h3>users</h3>
        <p>
          here are some people who posted pictures of them wearing the hat. some, i know. some, i have never seen in my life.
        </p>
        <Image src={user1} />
        <Image src={user2} />
        <Image src={user3} />
        <Image src={user4} />
        <Image src={user5} />
      </div>
    )
  }
}
