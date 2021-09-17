import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'
describe('pruebas en el hook useFetchGifs', () => {
  test('debe retornar el estado inicial', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('dragon'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  test('desbe de retornar un arrglo de imagenes y loading false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('dragon'));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect( data.length ).toBe(10);
    expect( loading ).toBe(false);
  });
});