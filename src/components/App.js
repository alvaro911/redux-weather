import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cityInput: ''
    }

    this._onSubmitForm = this._onSubmitForm.bind(this);
    this._onOtherCity = this._onOtherCity.bind(this);
  }

  _onSubmitForm(e) {
    e.preventDefault()
    this.props.getCity(this.state.cityInput)
    this.setState({
      cityInput: ''
    })
  }

  _onOtherCity(e) {
    this.setState({
      cityInput: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this._onSubmitForm}>
          <input
            type="text"
            value={this.state.cityInput}
            onChange={this._onOtherCity}
            placeholder="Denver"
          />
        </form>
        <div>
          <h1>{this.props.cityName}</h1>
          <h2>{this.props.temp}</h2>
          <img src={this.props.icon} alt="weather icon" />
          <h3>{this.props.weatherCon}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.cityName,
    weatherCon: state.weatherCon,
    temp: state.temp,
    icon: state.icon,
  }
};



export default connect(
  mapStateToProps,
  action
)(App);
