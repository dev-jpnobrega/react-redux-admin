import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Messager from './messages';

describe('<Messager /> Component', () => {
  it('Render component, test wrapper len', () => {
    const wrapper = shallow(<Messager />);
    const actual = wrapper.length;
    const expected = 1;

    expect(expected).to.equal(actual);
  });
});
