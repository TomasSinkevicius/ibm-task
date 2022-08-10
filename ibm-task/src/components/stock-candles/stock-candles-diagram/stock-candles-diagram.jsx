import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
export const StockCandlesDiagram = ({ stockCandles }) => {
  const transformData = data => {
    return data.c.map((item, index) => ({
      close: Number(item).toFixed(2),
      open: Number(data.o[index]).toFixed(2),
      timestamp: new Date(data.t[index] * 1000).toLocaleDateString(),
    }))
  }

  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        width={900}
        height={500}
        data={transformData(stockCandles)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className='line-chart'
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='timestamp' />
        <YAxis type='number' allowDecimals={true} allowDataOverflow={true} />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='open' stroke='blue' dot={false} />
        <Line type='monotone' dataKey='close' stroke='gray' dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
