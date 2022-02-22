import React from 'react';

class Form extends React.Component{
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome
          <input type="text" name='name' id='name' />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" name="email" id="email" />
          </label>
          <label htmlFor="cpf">
            CPF
            <input type="text" name="cpf" id="cpf"/>
          </label>
          <label htmlFor="adress">
            Endereço
            <input type="text" name="adress" id="adress" />
          </label>
          <label htmlFor="city">
            Cidade
            <input type="text" name="city" id="city" />
          </label>
          <label htmlFor="state">
            Estado
            <input type="text" name="state" id="state"/>
          </label>
          <label htmlFor="type">
            Tipo
            <input type="radio" name="type" id="apt" />Apt
            <input type="radio" name="type" id="casa" />Casa
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;