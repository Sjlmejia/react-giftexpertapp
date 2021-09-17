import React from 'react';
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GiftGridItem />', () => {
  const title = 'titulo';
  const url = 'es un url'
  const wrapper = shallow(<GifGridItem title={title} url={url}  />)

  test('debe mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrado con el titulo', () => {
    const p = wrapper.find('p');
    expect( p.text().trim()).toBe( title)
  });

  test('debe tener imagen igual al url y alt', () => {
    
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  });

  test('debe tener la clase', () => {
    const div = wrapper.find('div');
    const clasName = div.prop('className');

    expect(clasName.includes('card')).toBe(true)
  });
});