import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is Required'),
    specialInstructions: yup
        .string(),
    pizzaSize: yup
        .string(),
    
    toppings: yup
        .string(),

})

export default formSchema