const meuArray = [1, 23, 55, 67, 30, 2, 4];

function filtraPares(arr){
  return arr.filter(function(item){
    return item % 2 === 0;
  });
}

function filtraImpares(arr) {
  return arr.filter(function (item) {
    return item % 2 !== 0;
  });
}

console.log('Números pares:',filtraPares(meuArray));
console.log('Números impares:',filtraImpares(meuArray));