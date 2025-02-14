function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
    default:
      return "Operação Inválida";
      break;
  }
}

console.log(calculadora(10,5,'+')) // Deve exibir 15
console.log(calculadora(9,3,'/')) // Deve exibir 6
