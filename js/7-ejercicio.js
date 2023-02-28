// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const firstNumber = +prompt("Ingrese el primer número");
const secondNumber = +prompt("Ingrese el segundo número");
const thirdNumber = +prompt("Ingrese el tercer número");

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  document.write(
    `El mayor entre ${firstNumber}, ${secondNumber} y ${thirdNumber} es: ${firstNumber}`
  );
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  document.write(
    `El mayor entre ${firstNumber}, ${secondNumber} y ${thirdNumber}  es: ${secondNumber}`
  );
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  document.write(
    `El mayor entre ${firstNumber}, ${secondNumber} y ${thirdNumber}  es: ${thirdNumber}`
  );
} else if (
  firstNumber === secondNumber &&
  firstNumber === thirdNumber &&
  secondNumber === thirdNumber
) {
  document.write(
    `${firstNumber}, ${secondNumber} y ${thirdNumber} son números iguales`
  );
} else {
  document.write(
    `${firstNumber}, ${secondNumber}, ${thirdNumber}: Hay dos números iguales`
  );
}
