import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import SearchField from '../../src/components/SearchField'


describe('SearchField --> shallowMounts', () => {
  let wrapperShallow

  beforeEach(() => {
    wrapperShallow = shallow(<SearchField />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchField />, div)
  })

  it('SearchField initial state starts with an empty string', () => {
    const expectedState = {
      district: ''
    }

    expect(wrapperShallow.state()).toEqual(expectedState)
  })

  it('has a single input field with className user-input', () => {

    expect(wrapperShallow.find('.user-input').length).toEqual(1)
  })

  it('has a submit button with className button', () => {

    expect(wrapperShallow.find('.button').length).toEqual(1)
  })
})

describe('SearchField --> Mounts', () => {
  let wrapperMount
  const mockedFilter = jest.fn()
  const mockedSubmit = jest.fn()

  beforeEach(() => {
    wrapperMount = mount (<SearchField handleFilter={mockedFilter} handleClick={mockedSubmit}/>)
  })

  it('fires an onChange event on user input which should update the state', () => {
    const input = wrapperMount.find('.user-input')
    const expectedState = {
      district: 'Colorado'
    }

    input.simulate('change', { target: { value: 'Colorado' } })

    expect(wrapperMount.state()).toEqual(expectedState)
    expect(mockedFilter).toHaveBeenCalledTimes(1)
    expect(mockedFilter).toHaveBeenCalledWith('Colorado')
  })

  it('fires a returnSelection function with the data from state and sets the state back to empty strings', () => {
    const expectedBeginState = {
      district: 'Colorado'
    }
    const expectedEndState = {
      district: ''
    }
    const input = wrapperMount.find('.user-input')

    input.simulate('change', { target: { value: 'Colorado' } })

    expect(wrapperMount.state()).toEqual(expectedBeginState)

    wrapperMount.find('.button').simulate('click')

    expect(wrapperMount.state()).toEqual(expectedEndState)
    expect(mockedSubmit).toHaveBeenCalledTimes(1)
    expect(mockedSubmit).toHaveBeenCalledWith('Colorado')
  })
})
