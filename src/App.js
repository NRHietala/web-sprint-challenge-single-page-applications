import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form'
import Success from './components/Success'
import schema from './validation/schema';
import * as yup from 'yup';
import styled from 'styled-components';


const initialFormValues = {
  name:"",
  size: "",
  instructions: "",
  cheese: false,
  ham: false,
  pineapple: false,
  chicken: false,
}

const initialFormErrors = {
  name:"",
  size:"",
  instructions:'',
  cheese:"",
}

const initialPizzaValue = [];
const initialDisabled = true;

const App = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ pizza, setPizza ] = useState(initialPizzaValue);
  const [ isDisabled, setIsDisabled ] = useState(initialDisabled);

  const pizzaPrintout = (newPizza) => {
    // axios call to local host??
    // pull data from post request
    // set to pizza, pass to form and paint DOM with data
    return setPizza(formValues)
  }

  const onSubmit = () => {
    const newPizza = {
      name:formValues.name.trim(),
      size:formValues.size,
      cheese:formValues.cheese,
      ham:formValues.ham,
      pineapple:formValues.pineapple,
      chicken:formValues.chicken
    }
    pizzaPrintout(newPizza)
    setFormValues(initialFormValues)
  }

  const onChange = ( name, value ) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [ name ] : "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name] : err.errors[0],
        })
      })
    
      setFormValues({ ...formValues, [name]:value })
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid)
    });
  },[formValues])

  const StyledApp = styled.div `
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    background:url("https://get.wallhere.com/photo/pizza-food-mushroom-tomatoes-basil-Garlic-olives-1562211.jpg");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    min-height: 100vh;
    
  `

  return (
    <StyledApp className="app">
        <h1>🏰 Nate's Pizza Palace 🏰</h1>
      <Link to="/form"><button className="pizza-btn">Ready To Dine Like King</button></Link>
      <Switch>
        <Route path="/form">
          <Form
          values={formValues}
          onChange={onChange}
          onSubmit={onSubmit}
          errors={formErrors}
          disabled={isDisabled}
          printout={pizza}
          />
        </Route>
        <Route path="/success">
          <Success printout={pizza}/>
        </Route>
      </Switch>
    </StyledApp>
  );
};
export default App;
