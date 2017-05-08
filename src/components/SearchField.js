import React, { Component } from 'react'

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
      <section className="controls">
        <input
          className='user-input'
          type='text'
          placeholder='Search by district'
          onChange={ (e) => {this.handleInput(e)} }
        />
        <input
          className = 'button'
          type='submit'
          onClick={ () => {this.returnSelection()} }
        />
      </section>
    )
  }
}

const { func } = React.PropTypes
SearchField.propTypes = {
  handleClick: func.isRequired,
  handleFilter: func.isRequired
}
