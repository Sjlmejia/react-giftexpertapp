import React from 'react';
import {shallow} from 'enzyme'
import GifExpertApp from '../../GifExpertApp'
describe('pruebas para GiftExperApp', () => {
  test('debe crearse', () => {
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrarse una lista de elementos', () => {
    const categories =['dragon'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});