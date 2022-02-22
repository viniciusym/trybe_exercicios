import React from 'react';

class Form extends React.Component{
  constructor() {
    super();

    this.state = {
      name: '',
    }

    this.handleName = this.handleName.bind(this);
  }

  handleName(event){
    this.setState(() => ({
      name: event.target.value.toUpperCase(),
    }))
  }

  render() {
    const { name } = this.state;
    return (
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome
          <input type="text" name='name' id='name' onChange={ this.handleName } value={ name }/>
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
        <fieldset>
          <label htmlFor="curriculum">
            Resumo do currículo
            <textarea name="curriculum" id="curriculum" cols="30" rows="10" maxLength="1000"/>
          </label>
          <label htmlFor="position">
            Cargo
            <textarea name="position" id="position" cols="30" rows="10" maxLength="40"/>
          </label>
          <label htmlFor="position-description">
            Descrição do cargo
            <textarea name="position-description" id="position-description" cols="30" rows="10" maxLength="500"/>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;