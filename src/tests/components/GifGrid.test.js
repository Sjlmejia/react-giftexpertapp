import React from 'react';
import {shallow} from 'enzyme'
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('test para GifGrid component', () => {
  const category = 'Iron Man';

  test('debe crearse gifgrid', () => {
    useFetchGifs.mockReturnValue({
      data:[],
      loading: true
    });
    const wrapp = shallow(<GifGrid category={category}/>);
    expect(wrapp).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se carga imagenes UseFetchGifs', () => {
    useFetchGifs.mockReturnValue({
      data:[{
        id:1,
        url: 'https://local.com',
        title: 'cualquier cosa'
      }],
      loading: false
    });
    const wrapp = shallow(<GifGrid category={category}/>);
    expect(wrapp.find('p').exists()).toBe(false);
    expect(wrapp.find('GifGridItem').length).toBe(1);
  });
});