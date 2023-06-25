/**
 * [X] Criar uma lista com 4 estudantes com os seguintes dados:
 *  - nome
 *  - nota da primeira prova
 *  - nota da segunda prova
 * 
 * [X] Criar uma função que calcule a média de cada estudante.
 * 
 * [] Verificar se cada estudante atingiu média 7 ou superior.
 * 
 * [X] Exibir mensagem informando a média do estudante.
 * 
 * "A média do(a) estudante(a) NOME_DO_ALUNO é: MÉDIA_DO_ALUNO"
 * 
 * [] Exibir mensagem parabenizando ou não o estudante.
 * 
 * "Parabéns, NOME_DO_ALUNO! Você foi aprovado(a) no concurso!"
 * "Não foi desta vez, NOME_DO_ALUNO! Tente novamente!"
 */

// Lista de estudantes
const students = [
  {
    name: 'Astridis',
    noteFirstTest: 6,
    noteSecondTest: 9.5
  },
  {
    name: 'Jubileu',
    noteFirstTest: 7,
    noteSecondTest: 2
  },
  {
    name: 'Gilda',
    noteFirstTest: 10,
    noteSecondTest: 3
  },
  {
    name: 'Acteclíneo',
    noteFirstTest: 10,
    noteSecondTest: 10
  }
]

function average(noteFirstTest, noteSecondTest) {
  let averageCalc = ((noteFirstTest + noteSecondTest) / 2).toFixed(2)
  return averageCalc
}

function validateAverage(student) {
  let validation = averageCalc >= 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi desta vez, ${student.name}! Tente novamente!`
  return validation
}

function printAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${average(student.noteFirstTest, student.noteSecondTest)}`
}

for (const student of students) {
  let averageMessage = printAverage(student)

  alert(`${averageMessage}`)
}