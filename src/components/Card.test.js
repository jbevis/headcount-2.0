import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card'

describe('Card component tests', () => {
  it('renders a card with a title for each district', () => {
    const wrapper = shallow(<Card />);
    const title = <h3>{ kinderData[key].location }</h3>

    expect(wrapper.contains(title)).toEqual(true);
  })
})
