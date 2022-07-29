let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function addNumber(
  number1: number,
  number2: number,
  devePrintar: boolean,
  frase: string
) {
  let resultado = number1 + number2;
  if (devePrintar) {
    console.log(frase + resultado);
  }
  return number1 + number2;
}

let devePrintar = true;
let frase = "O valor é: ";

if (button) {
  button.addEventListener("click", () => {
    if (input1 && input2) {
      console.log(
        addNumber(
          Number(input1.value),
          Number(input2.value),
          devePrintar,
          frase
        )
      );
    }
  });
}
