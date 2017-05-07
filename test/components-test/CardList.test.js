import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { CardList } from '../../src/components/CardList';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'



describe('CardList --> shallowMounts', () => {
  let wrapperShallow;
  const districtRepository = new DistrictRepository(kinderData)

  beforeEach(() => {
    wrapperShallow = shallow(<CardList kinderData={districtRepository.data} />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardList />, div)
  })

  it('has and card-list id', () => {
    const id = wrapperShallow.find('.card-list').root.nodes[0].props.id

    expect(id).toEqual('card-list')
  })

  it('has a no-data-found id when no data is passed through to CardList', () => {
    const missingDataWrapper = wrapperShallow = shallow(<CardList />)

    const id = missingDataWrapper.find('.no-data-found').root.nodes[0].props.id

    expect(id).toEqual('no-data-found')
  })
})

describe('CardList --> Mounts', () => {
  let wrapperMount;
  const districtRepository = new DistrictRepository(kinderData)

  beforeEach(() => {
    wrapperMount = mount(<CardList kinderData={districtRepository.data}  districtRepository={districtRepository} dataCompare={[]}/>)
  })

  it('has mulitple Cards class fields', () => {

    expect(wrapperMount.find('.district-card').length).toEqual(181)
  })
})
