import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup'
import Home from './components/Home';
import Form from './components/Form';
import formSchema from './validation/formSchema';
import Confirmation from './components/Confirmation'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid black;
  align-items: center;

  a {
    text-decoration: none;
    border: 1px solid black;
    padding: 5px 30px;
    color: black;
  }
  .shaded {
    background-color: red;
  }
`
const initialFormValues = {
  name: '',
  specialInstructions: '',
  pizzaSize: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    onions: false,
    peppers: false,
  }
}

const initialFormErrors = {
  name: '',
}

const App = () => {
  const [placedOrder, setPlacedOrder] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postOrder = order => {
    axios.post('https://reqres.in/api/users')
      .then(res => {
        setPlacedOrder([...placedOrder, res.data])
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({ ...formValues, [name]: value })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({ ...formValues, toppings: { ...formValues.toppings, [name]: isChecked, } })
  }

  const submit = () => {
    const order = {
      name: formValues.name.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      pizzaSize: formValues.pizzaSize,
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])
    }
    postOrder(order)
  }

  return (
    <div>
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <div>
          <a className="shaded" href="">Home</a>
          <a href="">Help</a>
        </div>
      </StyledHeader>

      <Switch>

        <Route path='/confirmation'>
          <Confirmation/>
        </Route>

        <Route path='/form' >
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            errors={formErrors}
          />
        </Route>

        <Route path='/' >
          <Home />
        </Route>

      </Switch>

    </div>
  );
};
export default App;
