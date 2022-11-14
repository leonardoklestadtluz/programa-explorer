/**
 * Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
 * 
 * "Paciente X possui o IMC de Y"
 * 
 * Onde X é o nome do paciente e Y é o IMC desse paciente
 * 
 * Crie uma função para fazer o cálculo do IMC
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
  },
  {
    name: 'Amadeu',
    age: 90,
    weight: 67,
    height: 160,
  },
  {
    name: 'Astrogildo',
    age: 30,
    weight: 78,
    height: 190,
  }
]

function imc(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
}

function printPatinetIMC(patient) {
  return `
  Paciente ${patient.name} possuí o IMC de ${imc(patient.weight, patient.height)}`
}

for (const patient of patients) {
  let IMCMessage = printPatinetIMC(patient)
  alert(IMCMessage)
}
