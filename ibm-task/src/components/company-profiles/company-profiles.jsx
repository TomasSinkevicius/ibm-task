import * as Styled from './styles'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StockCandles } from '../stock-candles/stock-candles'
import { CompanyProfileTiles } from './company-profile-tiles/company-profile-tiles'
import { convertToHumanDateFormat } from '../utils/convert-date'

export const CompanyProfiles = ({
  companyProfileValues,
  count,
  getCompanyProfiles,
  searchValue,
  setErrors,
  symbols,
  index,
  setIndex,
}) => {
  const [stockCandles, setStockCandles] = useState({})

  const INTERVAL_OPTIONS = [1, 5, 15, 30, 60, 'D', 'W', 'M']
  const [interval, setInterval] = useState(INTERVAL_OPTIONS[0])

  const getStockCandles = async selectedCompany => {
    return new Promise((resolve, reject) => {
      const FINNGUB_STOCK_CANDLES_API = `${process.env.REACT_APP_FINNHUB_STOCK_CANDLES_API}?symbol=${selectedCompany}&resolution=${interval}&from=${searchValue.dateFrom}&to=${searchValue.dateTo}&token=${process.env.REACT_APP_FINNHUB_TOKEN}`

      axios
        .get(FINNGUB_STOCK_CANDLES_API)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  }

  const handleStockCandles = async (selectedCompany, companyName) => {
    try {
      const responseCandles = await getStockCandles(selectedCompany)
      setStockCandles(responseCandles)
      setIndex(1)
      sendClientData(companyName, responseCandles)
    } catch (error) {
      console.log(error)
      if (error.response.status === 403) {
        sendClientData(selectedCompany, 'NO-ACCESS')
        alert('no access')
      }
    }
  }

  const sendClientData = async (companyName, responseCandles) => {
    console.log('SENDING CLIENT DATA')
    const SERVER_API = `${process.env.REACT_APP_SERVER_API}/action`
    const body = {
      companyName: companyName,
      dateFrom: convertToHumanDateFormat(searchValue.dateFrom),
      dateTo: convertToHumanDateFormat(searchValue.dateTo),
      stockPriceHistory: responseCandles,
    }

    axios
      .post(SERVER_API, body)
      .then(response => {
        console.log('SIUNCIAM DATA', response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    handleStockCandles()
  }, [interval])

  return (
    <Styled.Section>
      {index === 1 ? (
        <StockCandles
          setIndex={setIndex}
          stockCandles={stockCandles}
          setInterval={setInterval}
          INTERVAL_OPTIONS={INTERVAL_OPTIONS}
        />
      ) : (
        <>
          <CompanyProfileTiles
            companyProfileValues={companyProfileValues}
            handleStockCandles={handleStockCandles}
            searchValue={searchValue}
            setErrors={setErrors}
          />
          {companyProfileValues.length < count && (
            <button
              onClick={() => {
                console.log('ilgis', companyProfileValues.length)
                getCompanyProfiles(
                  symbols,
                  companyProfileValues.length + 1,
                  companyProfileValues.length + 5,
                )
              }}
            >
              Get more
            </button>
          )}
        </>
      )}
    </Styled.Section>
  )
}
