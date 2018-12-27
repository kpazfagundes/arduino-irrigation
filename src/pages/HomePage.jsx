import React, { Component } from 'react';
import { Header, Linechart } from '../components';

export default  class HomePage extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Linechart/>
        </div>
      </div>
    );
  };
}