import React, { Component } from 'react'
// import $ui from 'jquery-ui';

export default class SearchField extends Component {
  constructor () {
    super()
    this.state = {
      district: ''
    }
  }

  handleInput(e) {
    const inputValue = e.target.value
    this.setState( {district: inputValue}, () => {
      this.props.handleFilter(this.state.district)
    })
  }

  returnSelection() {
    this.props.handleClick(this.state.district)
    this.setState({
      district: ''
    })
  }

  render() {
    return (
      <section>
        <input
          className='user-input'
          type='text'
          placeholder='Enter a District'
          onChange={ (e) => {this.handleInput(e)} }
        />
        <input
          type='submit'
          onClick={ () => {this.returnSelection()} }
        />
      </section>
    )
  }
}
