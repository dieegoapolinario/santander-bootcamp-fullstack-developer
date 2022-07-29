let unknownValor: unknown;
unknownValor = 3;
unknownValor = true;
unknownValor = 'test'

let stringTest: string;

if(typeof unknownValor === "string"){
  stringTest = unknownValor;
}