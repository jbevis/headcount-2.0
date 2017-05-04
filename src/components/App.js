import React, { Component } from 'react';
import '../App.css';
import { CardList } from './CardList'
import DistrictRepository from '../helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'


class App extends Component {
  constructor() {
    super()
    this.state = {
      kinderData: {},
      dataCompare: []
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
  }

  filterDistricts(district) {
    let district2 = new DistrictRepository(kinderData)
    let result = district2.filterOnChange(district, kinderData)
    this.setState({ kinderData: result})
  }

  toggleCard(district) {
    if (!this.state.dataCompare.length) {
      this.state.dataCompare.push(district)
      console.log(1)
      return this.setState( {dataCompare: this.state.dataCompare})
    } else if (this.state.dataCompare.length < 3 && this.state.dataCompare.includes(district)) {
      let result = this.state.dataCompare.filter(val => {
        return district !== val
      })
      console.log(2)
      return this.setState( {dataCompare: result} )
    } else if (this.state.dataCompare.length < 2 && !this.state.dataCompare.includes(district)) {
      this.state.dataCompare.push(district)
      console.log(3)
      return this.setState( {dataCompare: this.state.dataCompare})
    }
      this.state.dataCompare.shift()
      this.state.dataCompare.push(district)
      console.log(4)
      return this.setState( {dataCompare: this.state.dataCompare})
  }

  render() {
    return (
      <div>
        <h1>Welcome to Headcount 2.0</h1>
        <SearchField
          handleClick={this.handleClick.bind(this)}
          handleFilter={this.filterDistricts.bind(this)}
        />
        <CardList kinderData={this.state.kinderData}
                    handleToggle={this.toggleCard.bind(this)}/>
      </div>
    );
  }
}

export default App;
