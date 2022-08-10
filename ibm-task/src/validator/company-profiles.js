export const validateCompanyName = (values, setError) => {
  const errors = {}
  const regex = /^[a-zA-Z ]{1,35}$/

  if (!values.name) {
    errors.name = 'Company name is required'
  } else if (!regex.test(values.name)) {
    errors.name = 'Company name must consist of letters only including space up to 35 characters'
  }

  setError(errors)
  return errors
}

export const validateDate = (values, setError) => {
  const errors = {}

  if (!values.dateFrom) {
    errors.dateFrom = 'Please select date!'
  }

  if (!values.dateTo) {
    errors.dateTo = 'Please select date!'
  }

  setError(errors)
  return errors
}
