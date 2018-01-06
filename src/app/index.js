import '../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Portfolio from './portfolio';
import Contact from './contact';

class Primary extends React.Component {
  constructor() {
    super();

    this.state = {
      showMoreWork: false,
      showPortfolio: false
    };

    this.showMoreWork = this.showMoreWork.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
  }

  showMoreWork() {
    this.setState({
      showMoreWork: true
    });
  }

  showPortfolio() {
    this.setState({
      showPortfolio: true
    });
  }

  render() {
    const moreWork = (
      <p className="inline">
        also <a href="https://gigster.com">gigster</a>, hellotoken (shut down), <a href="https://apptopia.com">apptopia</a>, <a href="https://www.asis.org/asist2014/proceedings/submissions/posters/349poster.pdf">unt (ml research)</a>
      </p>
    );

    return (
      <div className="container">
        <div id="toast"></div>
        <a id="btt" href="#main-portfolio">back to top</a>
        <div className="content">
          <h1>brandon truong</h1>
          <p>
            i’m a student at stanford ('20) studying symbolic systems. i worked 
            at <a href="https://buzzfeed.com">buzzfeed</a>, <a href="https://udacity.com">udacity</a>, and <a href="https://admithub.com">admithub</a> (
            {this.state.showMoreWork ?
              (<div className="inline">{moreWork}</div>) :
              <a onClick={this.showMoreWork}>...</a>
            }
            ).
            i like to design and engineer cool products.
            i also like to make art and shoot videos.
            i'm interested in new media, art, education, and fashion.
          </p>
          <p>
            see my  <a href="https://www.instagram.com/btrooo/">instagram</a>, <a href="https://github.com/btroo">github</a>, <a href="https://www.linkedin.com/in/btroo/">linkedin</a>.
          </p>
          <p>
            <Contact />
          </p>
          {this.state.showPortfolio ?
              <Portfolio /> :
              <p>
                <a href="#" onClick={this.showPortfolio}>Click to load portfolio</a>
              </p>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Primary/>,
  document.getElementById('primary')
);
