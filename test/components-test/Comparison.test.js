import React from 'react';
import { shallow, mount } from 'enzyme';
import { Comparison } from '../../src/components/Comparison';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper';

describe('Comparison --> shallow mounts', () => {
  let wrapperShallow;
  let mockedCompare = ['Colorado', 'ACADEMY 20'];
  const testRepo = new DistrictRepository(kinderData);


  beforeEach(() => {
    wrapperShallow = shallow(<Comparison districtRepository={testRepo} kinderData={testRepo.data} dataCompare={mockedCompare} />)
  })

  it('should render an section to hold the compared cards if they exist in state', () => {
    const found = wrapperShallow.find('.compare-field');

    expect(found.length).toEqual(1);
  })

  it('should render two cards if to be compared', () => {
    const found = wrapperShallow.find('.district-card');
    // const co = wrapperShallow.find('#Colorado');
    // const academy = wrapperShallow.find('#ACADEMY 20');

    // expect(co.length).toEqual(1);
    // expect(academy.length).toEqual(1);
    expect(found.length).toEqual(2)
  })

  it('should render a card comparing the two districts in state', () => {
    const found = wrapperShallow.find('#compare-card');

    expect(found.length).toEqual(1)
  })

})
