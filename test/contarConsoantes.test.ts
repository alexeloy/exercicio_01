import { contarcConsoantes } from '../src/index';

describe('contarConsoantes', () => {
  test('Contagem correta de consoantes', () => {
    const str = "Teste de contagem de consoantes!";
    let consoantes = 0;

    contarcConsoantes(str, (resultado) => {
      consoantes = resultado;
    });

    expect(consoantes).toBe(16);
  });

  test('Teste com string vazia', () => {
    const str = "";
    let consoantes = 0;

    contarcConsoantes(str, (resultado) => {
      consoantes = resultado;
    });

    expect(consoantes).toBe(0);
  });

  test('Contagem correta quando não há consoantes', () => {
    const str = "Óia!";
    let consoantes = 0;

    contarcConsoantes(str, (resultado) => {
      consoantes = resultado;
    });

    expect(consoantes).toBe(0);
  });

  test('Ignora caracteres não alfabéticos', () => {
    const str = "12345!@#$%";
    let consoantes = 0;


    contarcConsoantes(str, (resultado) => {
      consoantes = resultado;
    });

    expect(consoantes).toBe(0);
  });
});