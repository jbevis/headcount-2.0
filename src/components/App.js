import React, { Component } from 'react';
import '../App.css';
import { CardRender } from './CardRender'
import DistrictRepository from '../helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      kinderData: {}
    }
  }

  componentDidMount() {
    this.initialSetState(kinderData);
  }

  initialSetState (data) {
    const district = new DistrictRepository(data)
    this.setState({
      kinderData: district.data
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount 2.0</h1>
        <CardRender kinderData={this.state.kinderData} />
      </div>
    );
  }
}

export default App;
