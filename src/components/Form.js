import React from 'react';
import { Link, Route } from 'react-router-dom';

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


  return (
    <div>
      <h2>Pizza Fit For A Prince, But Priced For A Peasant!</h2>
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
          value={values.cheese}
          />
          </label>
          <label>Ham
          <input
          type="checkbox"
          name="ham"
          id='ham'
          onChange={change}
          value={values.ham}
          />
          </label>
          <label>Pineapple
          <input
          type="checkbox"
          name="pineapple"
          id='pineapple'
          onChange={change}
          value={values.pineapple}
          />
          </label>
          <label>Chicken
          <input
          type="checkbox"
          name="chicken"
          id='chicken'
          onChange={change}
          value={values.chicken}
          />
        </label>
        <br/>
        {/* dont forget to disable button */}
        <button>Let's get that pizza cooking!</button>
      </form>
      {printout.name && printout.name ? <h2>Pizza for: {printout.name}</h2>: null}
      {printout.size && printout.size ? <h2>Size: {printout.size}</h2>: null}
      {printout.cheese && printout.cheese ? <h3>Cheese</h3>: null}
      {printout.ham && printout.ham ? <h3>Ham</h3>: null}
      {printout.pineapple && printout.pineapple ? <h3>Pineapple</h3> : null}
      {printout.chicken && printout.chicken ? <h3>Chicken</h3>:null}
      
    </div>
  )
}

export default Form