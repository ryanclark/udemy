import React from 'react';

import { mount } from 'enzyme';

import { SearchBar } from '../SearchBar';

describe('Search Bar', () => {
  it('should render correctly', () => {
    const wrapper = mount(<SearchBar value="" onChange={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger the handler when the input is changed', () => {
    const onChange = jest.fn();
    const wrapper = mount(<SearchBar value="" onChange={onChange} />);
    const value = 'Test text';

    wrapper.find('input').simulate('change', { target: { value } });

    expect(onChange).toBeCalledWith(value);
  });
});
