import React, { Component } from 'react'
// import $ui from 'jquery-ui';

export default class SearchField extends Component {
  constructor () {
    super()
    this.state = {
      district: ''
      // autocomplete: []
    }
  }

  handleInput(e) {
    const inputValue = e.target.value
    this.setState({
      district: inputValue
    })
    // this.autoCompleteApiGenerator(inputValue)
  }

  returnSelection() {
    this.props.handleClick(this.state.district)
    this.setState({
      district: ''
    })
  }

//   autoCompleteApiGenerator(inputValue) {
//   this.props.kinderData[inputValue].then((data) => {
//     this.state.autocomplete = [];
//     data.RESULTS.forEach((location) => {
//       if (inputValue.length > 2) {
//         this.state.autocomplete.push(location.location);
//         this.handleAutoComplete();
//       }
//     });
//   });
// }
//
//   handleAutoComplete() {
//     $('.user-input').autocomplete({
//       minLength: 2,
//       source: this.state.autocomplete,
//       open: () => $('.ui-menu').width(285),
//       select: (event, ui) => {
//         this.setState({
//           location: ui.item.value,
//         }, this.selectCity);
//       },
//     });
//   }

  render() {
    return (
      <section>
        <input
          className= 'user-input'
          type='text'
          placeholder='Enter a District'
          onChange={(e) => {this.handleInput(e)}}
        />
        <input
          type='submit'
          onClick={() => {this.returnSelection()}}
        />
      </section>
    )
  }
}
