import React from 'react'
import { Link } from 'react-router-dom'

export default function Form(props) {
    const { values, submit, inputChange, checkboxChange, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return (

        <form onSubmit={onSubmit}>
            <div>
                <h3>Build Your Own Pizza</h3>
                <img src="" />
            </div>
            <div>
                <label>Name</label>
                <input value={values.name} onChange={onInputChange} name='name' type='text' />
                <br />
                <label>Pizza Size</label>
                <select value={values.pizzaSize} onChange={onInputChange} name='pizzaSize'>
                    <option value="">-- Select Pizza Size --</option>
                    <option value="14">14 inches</option>
                    <option value="16">16 inches</option>
                    <option value="18">18 inches</option>
                </select>

                <h3>Toppings</h3>

                <label>Pepperoni
                    <input 
                        type="checkbox" 
                        name="pepperoni"
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Sausage
                    <input 
                        type="checkbox" 
                        name="sausage"
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Onions
                    <input 
                        type="checkbox" 
                        name="onions"
                        checked={values.toppings.onions}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Peppers
                    <input 
                        type="checkbox" 
                        name="peppers"
                        checked={values.toppings.peppers}
                        onChange={onCheckboxChange}
                    />
                </label>
                <br/>
                <label>Special Instructions<br/>
                    <input
                        value={values.specialInstructions}
                        type="text"
                        name="specialInstructions"
                        onChange={onInputChange}
                    />
                </label>  

                <div>
                <div>{errors.name}</div>
                </div>

                <Link to='/confirmation'><input type="submit" value="Submit" /></Link>              
            </div>

        </form>

    )

}