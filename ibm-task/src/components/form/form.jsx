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
      <label>Company name:</label>
      <input placeholder='Company name' name='name' onChange={handleOnChange} />
      <p>{errors.name}</p>
      <label>Date from:</label>
      <input type='date' placeholder='Date from' name='dateFrom' onChange={handleOnChange} />
      <p>{errors.dateFrom}</p>
      <label>Date to:</label>
      <input type='date' name='dateTo' onChange={handleOnChange} />
      <p>{errors.dateTo}</p>
      <button>Search</button>
    </Styled.FormContainer>
  )
}
