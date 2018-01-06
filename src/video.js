import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
      <p className="video-container">
        You can view it <a href={this.props.src}>here</a>.
      </p>
    );
  }
}
