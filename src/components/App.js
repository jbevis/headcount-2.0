import React, { Component } from 'react';
import '../App.css';
import { CardRender } from './CardRender'
import DistrictRepository from '../helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'


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

  handleClick (district, data) {
    console.log('hooked up!')
    console.log(district);
    const district1 = new DistrictRepository(kinderData)
    let item = district1.findByName(district)

    console.log(item) //JUST KEYS


    this.setState({
      kinderData: {item}
    })
    // let keys = Object.keys(kinderData)
    //
    // let objs = keys.reduce((acc, val) => {
    //
    //   return acc
    // }, {})``
    // this.setState({
    //   kinderData: district1.findAllMatches(district)
    // })

  }

  filterDistricts(district) {
    let district2 = new DistrictRepository(kinderData)
    let result = district2.filterOnChange(district, kinderData)
    this.setState({ kinderData: result})
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount 2.0</h1>
        <SearchField
          handleClick={this.handleClick.bind(this)}
          handleFilter={this.filterDistricts.bind(this)}
        />
        <CardRender kinderData={this.state.kinderData} />
      </div>
    );
  }
}
// kinderData={this.state.kinderData}

export default App;
