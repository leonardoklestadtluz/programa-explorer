/**
 * Crie uma lista de pacientes
 * 
 * Cada paciente dentro da lista deverá conter:
 *  nome
 *  idade
 *  peso
 *  altura
 * 
 * Escreva uma lista contendo o nome dos pacientes
 * 
 */

const patients = [
  {
    name: 'Jucão',
    age: 34,
    weight: 76,
    height: 177,
  },
  {
    name: 'Acteclineo',
    age: 50,
    weight: 89,
    height: 189,
  },
  {
    name: 'Tião',
    age: 68,
    weight: 67,
    height: 178,
  }
]

let patientsNames = []

for (const patient of patients) {
  patientsNames.push(`Olá eu sou o ${patient.name}. Tenho ${patient.age} anos, ${patient.weight} quilos e ${patient.height} de altura.`)
}

alert(patientsNames)