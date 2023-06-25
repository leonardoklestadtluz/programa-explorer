/**
 * Solicitar o nome do aluno e as 3 notas do bimestre,
 * calcular a média daquele aluno.
 * 
 * A média bimestral deverá ser maior ou igual a 6.
 * 
 * Se o aluno passou no bimestre, dar os parabéns.
 * 
 * Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.
 * 
 * Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
 */

// EXIBE MENSAGEM
alert('Bem vindo (a) ao Média Aluno')

// CAPTURA DE DADOS
let studant = prompt('Qual o nome do (a) aluno (a)?')
let note1 = prompt('Informe a 1ª nota do aluno')
let note2 = prompt('Informe a 2ª nota do aluno')
let note3 = prompt('Informe a 3ª nota do aluno')

// CÁLCULO DA MÉDIA
let avarage = (Number(note1) + Number(note2) + Number(note3)) / 3

let result = avarage >= 6

avarage = avarage.toFixed(2)

if (result) {
  alert('PARABÉNS ' + studant + '! Sua média bimestral foi ' + avarage + ', você está aprovado!')
} else if (avarage >= 3 && avarage <= 6) {
  alert('[ATENÇÃO] ' + studant + '! Sua média bimestral foi ' + avarage + '. Você não passou, mas terá outra chance. Estude e dê o seu melhor na prova de recuperação.')
} else {
  alert(studant + ' sua média bimestral foi ' + avarage + '. Você está reprovado.')
}