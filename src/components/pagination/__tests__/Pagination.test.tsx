import React from 'react';

import { mount } from 'enzyme';

import { Button, Pagination } from '../Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Pagination offset={20} total={41} onChange={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the next button when there are more results', () => {
    const wrapper = mount(<Pagination offset={20} total={41} onChange={() => null} />);

    expect(wrapper.find(Button).at(1).text()).toBe('Next');
  });

  it('should render the previous button when needed', () => {
    const wrapper = mount(<Pagination offset={20} total={41} onChange={() => null} />);

    expect(wrapper.find(Button).at(0).text()).toBe('Previous');
  });

  it('should only render the next button when on the first page', () => {
    const wrapper = mount(<Pagination offset={0} total={21} onChange={() => null} />);

    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Button).at(0).text()).toBe('Next');
  });

  it('should only render the previous button when on the last page', () => {
    const wrapper = mount(<Pagination offset={20} total={21} onChange={() => null} />);

    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Button).at(0).text()).toBe('Previous');
  });

  it('should render both buttons when not on the first or last page', () => {
    const wrapper = mount(<Pagination offset={20} total={41} onChange={() => null} />);

    expect(wrapper.find(Button).length).toBe(2);
    expect(wrapper.find(Button).at(0).text()).toBe('Previous');
    expect(wrapper.find(Button).at(1).text()).toBe('Next');
  });

  it('should trigger the handler when a button is clicked', () => {
    const onChange = jest.fn();

    const wrapper = mount(<Pagination offset={0} total={21} onChange={onChange} />);

    wrapper.find(Button).at(0).simulate('click');

    expect(onChange).toBeCalledWith(20);
  });
});
