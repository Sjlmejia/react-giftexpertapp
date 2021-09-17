import React from "react";
import {shallow} from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('pruebas para addcategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
    
  });
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   test('debe de cambiar la caja de texto', () => {

  //     const input = wrapper.find('input');
  //     const value = 'Hola mundo';
  //     input.simulate('change', {
  //       target: {
  //         value: value
  //       }
  //     });
  // });
  test('no debe de postaer la informacion onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    
    expect(setCategories).not.toHaveBeenCalled();
  });

    test('debe de llamar el setcategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {
      target: {
        value: value
      }
    });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    
    expect(setCategories).toHaveBeenCalled();
    expect(input.text()).toBe('');
    expect( setCategories ).toHaveBeenCalledWith(expect.any(Function))
  });
});