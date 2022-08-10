import React from 'react'
import { StockCandlesDiagram } from './stock-candles-diagram/stock-candles-diagram'

import * as Styled from './styles'

export const StockCandles = ({ setIndex, stockCandles, INTERVAL_OPTIONS, setInterval }) => {
  const handleChangeInterval = event => setInterval(event.target.value)

  return (
    <Styled.StockCandlesContainer>
      <Styled.TopSection>
        <button className='btn btn-primary' onClick={() => setIndex(0)}>
          Back to the list
        </button>
        <span>Resolution : </span>

        <select onChange={handleChangeInterval}>
          {INTERVAL_OPTIONS.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Styled.TopSection>
      {stockCandles.s === 'ok' ? (
        <StockCandlesDiagram stockCandles={stockCandles} />
      ) : (
        <p className=''>No data</p>
      )}
    </Styled.StockCandlesContainer>
  )
}
