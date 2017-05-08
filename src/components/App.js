import React, { Component } from 'react';
import '../App.css';
import { CardList } from './CardList'
import DistrictRepository from '../helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'
import { Comparison } from './Comparison'


class App extends Component {
  constructor() {
    super()
    this.districtRepository = new DistrictRepository(kinderData)
    this.state = {
      kinderData: {},
      dataCompare: []
    }
  }

  componentWillMount() {
    this.initialSetState(kinderData);
  }

  initialSetState (data) {
    // const district = new DistrictRepository(data)
    this.setState({
      kinderData: this.districtRepository.data
    })
  }

  handleClick (district, data) {
    console.log('hooked up!')
    console.log(district);
    // const district1 = new DistrictRepository(kinderData)
    let item = this.districtRepository.findByName(district)

    console.log(item) //JUST KEYS


    this.setState({
      kinderData: {item}
    })
  }

  filterDistricts(district) {
    // let district2 = new DistrictRepository(kinderData)
    let result = this.districtRepository.filterOnChange(district, kinderData)
    this.setState({ kinderData: result})
  }

  toggleCard(district) {

    if (!this.state.dataCompare.length) {
      this.state.dataCompare.push(district)
      return this.setState( {dataCompare: this.state.dataCompare})
    } else if (this.state.dataCompare.length < 3 && this.state.dataCompare.includes(district)) {
      let result = this.state.dataCompare.filter(val => {
        return district !== val
      })
      return this.setState( {dataCompare: result} )
    } else if (this.state.dataCompare.length < 2 && !this.state.dataCompare.includes(district)) {
      this.state.dataCompare.push(district)
      return this.setState( {dataCompare: this.state.dataCompare})
    }
      this.state.dataCompare.shift()
      this.state.dataCompare.push(district)
      return this.setState( {dataCompare: this.state.dataCompare})
  }

  removeCards() {
    return this.setState({dataCompare: []})
  }

  render() {
    return (
      <div id='app'>
        <h1 id="header">Welcome to Headcount 2.0</h1>
        <Comparison
          districtRepository={this.districtRepository}
          dataCompare={this.state.dataCompare}
          kinderData={this.state.kinderData}
          handleToggle={this.toggleCard.bind(this)}
          removeCards={this.removeCards.bind(this)}
        />
        <SearchField
          handleClick={this.handleClick.bind(this)}
          handleFilter={this.filterDistricts.bind(this)}
        />
        <CardList kinderData={this.state.kinderData}
                  handleToggle={this.toggleCard.bind(this)}
                  districtRepository={this.districtRepository}
                  dataCompare={this.state.dataCompare}

        />
      </div>
    );
  }
}

export default App;
