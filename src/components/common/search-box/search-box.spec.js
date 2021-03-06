import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import SearchBox from './search-box';

describe('<SearchBox />', () => {
  it('should have a textbox with hintText \'Search\'', () => {
    const wrapper = shallow(<SearchBox />);
    const actual = wrapper.find('TextField').prop('hintText');
    const expected = 'Search...';

    expect(expected).to.equal(actual);
  });
});
