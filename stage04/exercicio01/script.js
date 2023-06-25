/**
 * Declaração de variáveis e captura de dados
 */
let firstNumber = prompt(`Digite o primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

/**
 * Converte a string para number
 * e atribuí o valor convertido
 * nas variáveis
 */
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

/**
 * Realiza as operações matemáticas
 */
const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = (firstNumber / secondNumber).toFixed(2)
const rest = firstNumber % secondNumber

/**
 * Exibe os esultados das operações
 * com template literals
 */
alert(`A soma dos dois números é -> ${sum}`)
alert(`A subtração dos dois números é -> ${sub}`)
alert(`A multiplicação dos dois números é -> ${mult}`)
alert(`A divisão dos dois números é -> ${div}`)
alert(`O resto da divisão entre os dos dois números é -> ${rest}`)

/**
 * Verifica se a soma dos números é PAR ou ÍMPAR
 */
if (sum % 2 == 0) {
  alert(`Este resultado ${sum} é PAR!`)
} else {
  alert(`Este resultado ${sum} é ÍMPAR!`)
}

/**
 * Verifica se números digitados pelo usuário são iguais
 */
if (firstNumber === secondNumber) {
  alert(`Número ${firstNumber} e ${secondNumber} são iguais.`)
} else {
  alert(`Número ${firstNumber} e ${secondNumber} são diferentes.`)
}