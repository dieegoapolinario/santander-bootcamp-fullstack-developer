const maca = {value: 2}
const laranja = {value: 3}
const nums = [1, 2];

function mapComThis(arr, thisArg){
  return arr.map(function(item){
    return item * this.value;
  }, thisArg);
}

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

/************************************************************/

const numbers = [2, 4, 6, 8, 10]

function mapSemThis(arr){
  return arr.map(function(item){
    return item * 2;
  });
}

console.log('Array original',numbers);
console.log('Novo array',mapSemThis(numbers));