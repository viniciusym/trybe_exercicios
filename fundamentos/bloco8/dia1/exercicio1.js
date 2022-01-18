/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Teste Teste'),
    id2: callback('Testes Testes'),
    id3: callback('test Test'), 
  }
  return employees;
};



const employer = (name) => {
  let email = `${name.toLowerCase().split(' ').join('_')}@trybe.com`;
  return email;
}

console.log(newEmployees(employer));