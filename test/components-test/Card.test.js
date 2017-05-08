import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { Card } from '../../src/components/Card'
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from '../../src/helper'

describe('Card --> shallowMounts', () => {
  let wrapperShallow
  const districtRepository = new DistrictRepository(kinderData)
  const mockHandleToggle = jest.fn()

  beforeEach(() => {
    wrapperShallow = shallow(<Card location={'Colorado'} data={{2004: 1, 2005: 0.47, 2006: 0.78}} handleToggle={mockHandleToggle} districtRepository={districtRepository} dataCompare={[]} />)
  })

  it('has district-card className', () => {

    expect(wrapperShallow.find('.district-card').length).toEqual(1)
  })

  it('has an h3 with a card-location className for displaying the location', () => {

    expect(wrapperShallow.find('.card-location').length).toEqual(1)
  })

  it('has a section with a year-data className for displaying each year and scores', () => {

    expect(wrapperShallow.find('.year-data').length).toEqual(3)
  })

  it('has a above and below className for when the data is above or below 0.5', () => {

    expect(wrapperShallow.find('.below').length).toEqual(1)
    expect(wrapperShallow.find('.above').length).toEqual(2)
  })
})

describe('Card --> Mounts', () => {
  let wrapperMount
  const districtRepository = new DistrictRepository(kinderData)
  const mockHandleToggle = jest.fn()

  beforeEach(() => {
    wrapperMount = mount(<Card location={'Colorado'} data={{2004: 1, 2005: 0.86, 2006: 0.78}} handleToggle={mockHandleToggle} districtRepository={districtRepository} dataCompare={['Colorado']} />)
  })

  it('fires an handleToggle function onClick of the article that gives the card a class of is-selected', () => {
    const card = wrapperMount.find('.district-card')

    expect(card.hasClass('district-card')).toBe(true)
    expect(card.hasClass('is-selected')).toBe(true)

    card.simulate('click')

    expect(mockHandleToggle).toHaveBeenCalledTimes(1)
  })
})
