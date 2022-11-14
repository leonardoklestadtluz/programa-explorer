/**
 * Solicite dois números, faça a soma deles,
 * divida o resultado final por 2
 * e apresente o resultado final ao usuário.
 */

alert("Olá visitante! Pressione o botão 'OK'")

let name = prompt("Informe seu nome")
alert("Certo " + name + ", iremos somar dois números e dividir o resultado por 2.")

let numberOne = prompt("Digite o primeiro números")
let numberTwo = prompt("Digite o segundo número")
let result = (Number(numberOne) + Number(numberTwo)) / 2
alert("Resultado = " + result)