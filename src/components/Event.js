import React, { PropTypes } from 'react';

class EventComponent extends React.Component {
  static propTypes = {
    method: PropTypes.string,
    url: PropTypes.string
  };

  render() {
    return (
      <div>
        <p className="endpointInfo">
          {<code>selected REST request: {this.props.method} to url: {this.props.url}</code>}
        </p>
      </div>
    );
  }
}

export default EventComponent;
