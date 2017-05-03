import React from 'react';
import Event from './Event';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      method: 'POST',
      url: '/events'
    };
  }

  onGetAllClick() {
    this.setState({method: 'GET', url: '/events'})}
  onPostClick() {
    this.setState({method: 'POST', url: '/events'})}
  onDeleteClick() {
    this.setState({method: 'DELETE', url: '/events/1'})}
  onGetClick() {
    this.setState({method: 'GET', url: '/events/1'})}
  onPutClick() {
    this.setState({method: 'PUT', url: '/events/1'})}

  render() {
    return (
      <div className="endpoints">
        <p>Events</p>
        <Event method = {this.state.method}
               url = {this.state.url}/>
        <h3><button onClick={this.onGetAllClick.bind(this)}>GET</button> /events</h3>
        <h3><button onClick={this.onPostClick.bind(this)}>POST</button> /events</h3>
        <h3><button onClick={this.onDeleteClick.bind(this)}>DELETE</button> /events/1</h3>
        <h3><button onClick={this.onGetClick.bind(this)}>GET</button> /events/1</h3>
        <h3><button onClick={this.onPutClick.bind(this)}>PUT</button> /events/1</h3>
      </div>
    );
  }
}

export default AppComponent;
