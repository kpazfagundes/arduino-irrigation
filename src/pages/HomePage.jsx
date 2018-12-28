import React, { Component } from 'react';
import { Header, Linechart } from '../components';

const url = 'https://iot-irrigation-hk.herokuapp.com/measurements'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`${url}/12`)
      .then(res => res.json())
      .then(result => {
        const lastMeasurement = result[0].value;
        let stateDescription = '';
          if (lastMeasurement > 800) {
            stateDescription = 'Sua plantinha Precisando de água';
          } else if (lastMeasurement > 600) {
            stateDescription = 'Sua plantinha está bem!';
          } else {
            stateDescription = 'Sua plantinha está muito bem =D';
          }
        this.setState({
          data: result,
          lastMeasurement,
          stateDescription
        })
      });

    fetch(`${url}/greater`)
    .then(res => res.json())
    .then(result => {
      this.setState({
        greatestMeasurementsDate: result.datetime
      });
    });
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="row">
          <div class="card col-12" align="center">
            <p class="card-text">{this.state.stateDescription}</p>
            <p class="card-text">A umidade atual é : {this.state.lastMeasurement}</p>
            <p class="card-text">Ela foi regada pela ultima vez as: <br/>{this.state.greatestMeasurementsDate}</p>
          </div>
          <div className="col-12">
            <Linechart data={this.state.data} />
          </div>
        </div>
      </div>
    );
  };
}