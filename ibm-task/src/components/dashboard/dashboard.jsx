import React, { useState } from 'react'
import * as Styled from './styles'
import axios from 'axios'
import { Form } from '../form/form'
import { CompanyProfiles } from '../company-profiles/company-profiles'
import { validateCompanyName } from '../../validator/company-profiles'

const initialState = {
  name: '',
  dateFrom: '',
  dateTo: '',
}

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState(initialState)
  const [symbols, setSymbols] = useState([])
  const [count, setCount] = useState(-1)
  const [companyProfileValues, setCompanyProfileValues] = useState([])
  const [errors, setErrors] = useState('')
  const [index, setIndex] = useState(0)

  const onFormSubmit = async e => {
    e.preventDefault()
    const formErrors = validateCompanyName(searchValue, setErrors)

    if (Object.keys(formErrors).length === 0) {
      try {
        const responseSymbols = await getSymbols()
        setSymbols(responseSymbols.result)
        setCount(responseSymbols.count)

        getCompanyProfiles(responseSymbols.result, 1, 5, true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const getCompanyProfiles = async (sym, from, to, reset = false) => {
    try {
      let companyProfiles = await Promise.all(
        sym
          .slice(from - 1, sym.length > to ? to : sym.length)
          .map(async element => await getSingleCompanyProfile(element.symbol)),
      )

      reset
        ? setCompanyProfileValues(companyProfiles)
        : setCompanyProfileValues([...companyProfileValues, ...companyProfiles])
    } catch (error) {
      console.log(error)
    }
  }

  const getSingleCompanyProfile = companySymbol => {
    const FINNHUB_COMPANY_PROFILE_API = `${process.env.REACT_APP_FINNHUB_COMPANY_PROFILE_API}?symbol=${companySymbol}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`

    return axios
      .get(FINNHUB_COMPANY_PROFILE_API)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getSymbols = async () => {
    const FINNHUB_COMPANY_SYMBOLS_API = `${process.env.REACT_APP_FINNHUB_SYMBOLS_SEARCH_API}${searchValue.name}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`

    return axios
      .get(FINNHUB_COMPANY_SYMBOLS_API)
      .then(response => response.data)
      .catch(err => console.log(err))
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <h1>Search and retrieve companies stock prices</h1>

        {index === 0 && (
          <Form onFormSubmit={onFormSubmit} setSearchValue={setSearchValue} errors={errors} />
        )}

        {count === 0 ? (
          <p>No companies found</p>
        ) : (
          <CompanyProfiles
            companyProfileValues={companyProfileValues}
            count={count}
            getCompanyProfiles={getCompanyProfiles}
            symbols={symbols}
            searchValue={searchValue}
            setErrors={setErrors}
            index={index}
            setIndex={setIndex}
          />
        )}
      </Styled.Wrapper>
    </Styled.Container>
  )
}
