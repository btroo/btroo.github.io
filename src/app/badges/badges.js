import React from 'react';

const EngineeringBadge = ({}) => (
  <div className="badge engineering-badge">
    Engineering
  </div>
);

const DesignBadge = ({}) => (
  <div className="badge design-badge">
    Design
  </div>
);

export default class Badges extends React.Component {
  render() {

    return (
      <div className="badges">
        {this.props.engineering && <EngineeringBadge />}
        {this.props.design && <DesignBadge />}
      </div>
    )
  }
}
