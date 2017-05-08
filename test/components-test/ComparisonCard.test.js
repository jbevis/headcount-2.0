import React from 'react'
import {shallow, mount} from 'enzyme'
import ReactDOM from 'react-dom'
import { ComparisonCard } from '../../src/components/ComparisonCard'
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from '../../src/helper'


describe('ComparisonCard --> shallow mounts', () => {
  let wrapperShallow
  const testRepo = new DistrictRepository(kinderData)

  beforeEach(() => {
    wrapperShallow = shallow(<ComparisonCard districtRepository={testRepo} locationA={'Colorado'} locationB={'ACADEMY 20'}/>)
  })

  it('has a compare-card id', () => {
    const found = wrapperShallow.find('#compare-card')

    expect(found.length).toEqual(1)
  })

  it('has two h3 tags displaying the names of the two locations be compated', () => {
    const found = wrapperShallow.find('.compare-location')

    expect(found.length).toEqual(2)
  })

  it('has three p tags with a className of compare-data', () => {
    const found = wrapperShallow.find('.compare-data')

    expect(found.length).toEqual(3)
  })
})

describe('ComparisonCard --> mounts', () => {
  let mountWrapper
  const testRepo = new DistrictRepository(kinderData)
  let mockClick = jest.fn()

  beforeEach(() => {
    mountWrapper = mount(<ComparisonCard districtRepository={testRepo} locationA={'Colorado'} locationB={'ACADEMY 20'} removeCards={mockClick} />)
  })

  it('on click fires the function passed down as props', () => {
    const found = mountWrapper.find('#compare-card')

    found.simulate('click')

    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
