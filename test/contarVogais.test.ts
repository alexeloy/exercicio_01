import { contarVogais } from '../src/index';

describe('contarVogais', () => {
  test('Contagem correta de vogais', () => {
    const str = "Teste de contagem de vogais!";
    let vogais = 0;

    contarVogais(str, (resultado) => {
      vogais = resultado;
    });

    expect(vogais).toBe(10);
  });

  test('Teste com string vazia', () => {
    const str = "";
    let vogais = 0;

    contarVogais(str, (resultado) => {
      vogais = resultado;
    });

    expect(vogais).toBe(0);
  });

  test('Contagem correta quando não há vogais', () => {
    const str = "bcdfg";
    let vogais = 0;

    contarVogais(str, (resultado) => {
      vogais = resultado;
    });

    expect(vogais).toBe(0);
  });

  test('Ignora caracteres não alfabéticos', () => {
    const str = "12345!@#$%";
    let vogais = 0;


    contarVogais(str, (resultado) => {
      vogais = resultado;
    });

    expect(vogais).toBe(0);
  });
});