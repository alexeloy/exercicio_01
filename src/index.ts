// Definição da função de callback
type Callback = (resultado: number) => void;

// Função para contar vogais
function contarVogais(str: string, callback: Callback): void {
  // Definir as vogais
  const vogais = 'aeiouAEIOU';
  // Inicializar contador
  let contador = 0;
  // Contar as vogais na string
  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  // Passar o resultado para o callback
  callback(contador);
}

// Função para contar vogais
function contarcConsoantes(str: string, callback: Callback): void {
  // Definir as vogais
  const vogais = 'aeiouAEIOU';
  // Inicializar contador
  let contadorConsoantes = 0;

  // Contar as vogais na string
  for (let char of str) {
    if (char.match(/[a-zA-Z]/) && !vogais.includes(char)) {
      contadorConsoantes++;
    }
  }
  // Passar o resultado para o callback
  callback(contadorConsoantes);
}

// Exemplo de uso da função contarVogais
const inputDefault = "ClearSale Exercise 01";
contarVogais(inputDefault, (resultado) => {
  console.log(`O número de vogais em "${inputDefault}" é: ${resultado}`);
});

contarcConsoantes(inputDefault, (resultado) => {
  console.log(`O número de consoantes em "${inputDefault}" é: ${resultado}`);
});

export { contarVogais, contarcConsoantes };