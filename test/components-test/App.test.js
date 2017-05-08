import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/components/App';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'

describe('App --> shallow', () => {
  let wrapperShallow;

  beforeEach(() => {
    wrapperShallow = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders App with an id of app ', () => {
    const found = wrapperShallow.find('#app')

    expect(found.length).toEqual(1)
  })

  it('renders a header with an id of header ', () => {
    const found = wrapperShallow.find('#header')

    expect(found.length).toEqual(1)
  })

  it('should set set initial state', () => {
    const testRepo = new DistrictRepository(kinderData);
    const expectedState = { kinderData: testRepo.data, dataCompare: []};

    expect(wrapperShallow.state()).toEqual(expectedState);
  })
})

describe('App --> mount', () => {
  let wrapperMount;

  beforeEach(() => {
    wrapperMount = mount(<App />);
    const testRepo = new DistrictRepository(kinderData);

  })

  it('should display the correct number of cards based on data in state', () => {
    const testRepo = new DistrictRepository(kinderData);
    const foundCards = wrapperMount.find('.district-card');

    expect(foundCards.length).toEqual(181)
  })

  it('should display the compare card area after clicking on card', () => {
    const cardOne = wrapperMount.find('.district-card').first();
    const testRepo = new DistrictRepository(kinderData);
    const expectedState = { kinderData: testRepo.data, dataCompare: ['Colorado']};

    cardOne.simulate('click');

    expect(wrapperMount.state()).toEqual(expectedState);
    expect(wrapperMount.find('.compare-field').length).toEqual(1);
  })

  it('clicking on two cards will create comparison selection with new comparitive card', () => {
    const cardOne = wrapperMount.find('.district-card').first();
    const cardTwo = wrapperMount.find('.district-card').last();
    const testRepo = new DistrictRepository(kinderData);
    const expectedState = { kinderData: testRepo.data, dataCompare: ['Colorado', 'YUMA SCHOOL DISTRICT 1']};

    cardOne.simulate('click');
    cardTwo.simulate('click');

    expect(wrapperMount.state()).toEqual(expectedState);
    expect(wrapperMount.find('.compare-field').length).toEqual(1);
    expect(wrapperMount.find('#compare-card').length).toEqual(1);

  })
})
