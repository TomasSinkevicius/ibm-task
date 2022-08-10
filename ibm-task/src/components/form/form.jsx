import React from 'react'
import { convertToUnix } from '../utils/convert-date'
import * as Styled from './styles'

export const Form = ({ onFormSubmit, setSearchValue, errors }) => {
  const handleOnChange = event => {
    const { name, value, type } = event.target

    setSearchValue(prev => {
      if (type === 'date') {
        let unixDate = convertToUnix(value)
        return { ...prev, [name]: unixDate }
      } else return { ...prev, [name]: value }
    })
  }

  return (
    <Styled.FormContainer onSubmit={onFormSubmit}>
      {errors.name && <p className='alert alert-danger'>{errors.name}</p>}
      <label>Company name:</label>
      <input
        className='form-control'
        placeholder='Company name'
        name='name'
        onChange={handleOnChange}
      />
      {errors.dateFrom && <p>{errors.dateFrom}</p>}
      <label>Date from:</label>
      <input
        className='form-control'
        type='date'
        placeholder='Date from'
        name='dateFrom'
        onChange={handleOnChange}
      />
      {errors.dateTo && <p>{errors.dateTo}</p>}
      <label>Date to:</label>
      <input className='form-control' type='date' name='dateTo' onChange={handleOnChange} />
      <button className='btn btn-primary' type='submit'>
        Search
      </button>
    </Styled.FormContainer>
  )
}
