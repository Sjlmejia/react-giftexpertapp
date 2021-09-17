import { getGifs } from "../../helpers/getGifs";

describe('pruebas para getGif', () => {
  test('prueba para la funcion getGifs', async() => {
    const gifs = await getGifs('One punch');
    expect(gifs.length).toBe(10)
  });
    test('prueba para la funcion getGifs sin categoria', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0)
  });
})