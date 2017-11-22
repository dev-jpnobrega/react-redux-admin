import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Msg from './';

describe('<Msg />', () => {
  it('Render component', () => {
    const wrapper = shallow(<Msg />);

    //const actual = wrapper.contextfind('div').text();
    //const expected = 'navigation';

    const actual = wrapper.length;
    const expected = 1;
    expect(expected).to.equal(actual);
  });

});
