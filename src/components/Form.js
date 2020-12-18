import React from 'react';
import styled from 'styled-components';
import Success from './Success';

function Form(props) {
  const { values, onChange, onSubmit, errors, disabled, printout } = props;


  const change = event => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    onChange(name, valueToUse);
  }

  const submit = event => {
    event.preventDefault();
    onSubmit();
  }
  
  const StyledForm = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    background: rgba(215,215,115,.75);
    border: 2px solid black;
    padding: 30px;

    form {
      display:flex;
      flex-flow:column nowrap;
      align-items:center;
    }
    .submit-btn {
      padding: 10px;
    }

  `
  return (
    <StyledForm className="form-container">
      <h2>Pizza Fit For A Prince, But Priced For A Peasant!</h2>
      <div>{errors.name}</div>
      <div>{errors.size}</div>
      <form onSubmit={submit}>
        <label>Customer Name
          <input 
          type="text"
          name="name"
          id="name"
          onChange={change}
          value={values.name}
          />
        </label>
        <br/>
        <label>Pizza Size
          <select name="size" id="size" onChange={change} value={values.size}>
            <option value="">---Select Size---</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Kiddie Pool">Kiddie Pool</option>
          </select>
        </label>
        <br/>
        <label>Cheese
          <input
          type="checkbox"
          name="cheese"
          id='cheese'
          onChange={change}
          checked={values.cheese}
          />
          </label>
          <label>Ham
          <input
          type="checkbox"
          name="ham"
          id='ham'
          onChange={change}
          checked={values.ham}
          />
          </label>
          <label>Pineapple
          <input
          type="checkbox"
          name="pineapple"
          id='pineapple'
          onChange={change}
          checked={values.pineapple}
          />
          </label>
          <label>Chicken
          <input
          type="checkbox"
          name="chicken"
          id='chicken'
          onChange={change}
          checked={values.chicken}
          />
        </label>
        <br/>
        {/* dont forget to disable button */}
        <button disabled={disabled} className="submit-btn">Let's get that pizza cooking!</button>
      </form>
        <Success printout={printout}/>
    </StyledForm>
  )
}

export default Form