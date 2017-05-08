import React from 'react'
import { shallow, mount } from 'enzyme'
import { Comparison } from '../../src/components/Comparison'
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from '../../src/helper'

describe('Comparison --> shallow mounts', () => {
  let wrapperShallow
  let mockedCompare = ['Colorado', 'ACADEMY 20']
  const testRepo = new DistrictRepository(kinderData)


  beforeEach(() => {
    wrapperShallow = shallow(<Comparison districtRepository={testRepo} kinderData={testRepo.data} dataCompare={mockedCompare} />)
  })

  it('should render an section to hold the compared cards if they exist in state', () => {
    const found = wrapperShallow.find('.compare-field')

    expect(found.length).toEqual(1)
  })

  it('should render three cards to display data if two locations are in data compare', () => {
    const found = wrapperShallow.find('.compare-field')
    const children = found.node.props.children

    expect(children.length).toEqual(3)
  })

  it('should only render one duplicate district data card if one in data compare array', () => {
    const tempWrapperShallow = shallow(<Comparison districtRepository={testRepo} kinderData={testRepo.data} dataCompare={['Colorado']} />)
    const foundCard = tempWrapperShallow.find('.compare-field')
    const child = foundCard.length

    expect(child).toEqual(1)
  })

  it('should only render one duplicate district data card if one in data compare array', () => {
    const tempWrapperShallow = shallow(<Comparison districtRepository={testRepo} kinderData={testRepo.data} dataCompare={[]} />)
    const div = tempWrapperShallow.find('div')

    expect(div.hasClass('no-data')).toBe(true)
  })
})
