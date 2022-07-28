const arr = [1, 2, 3, 4, 5];

function somaNumeros(arr){
  return arr.reduce(function(prev, current){
    return prev + current;
  })
}

console.log('Soma do array:',somaNumeros(arr))

/*********************************************/

const lista = [
  {name: 'sabão em pó', preco:30},
  {name: 'cereal', preco:12},
  {name: 'toalha', preco:30}
];
const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
  return lista.reduce(function(prev, current, index){
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log('Saldo Atual:',calculaSaldo(saldoDisponivel, lista));