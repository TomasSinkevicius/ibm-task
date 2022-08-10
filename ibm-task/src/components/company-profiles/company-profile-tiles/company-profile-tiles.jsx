import React from 'react'
import { validateDate } from '../../../validator/company-profiles'
import * as Styled from './styles'

export const CompanyProfileTiles = ({
  companyProfileValues,
  searchValue,
  setErrors,
  handleStockCandles,
}) => {
  const handleClick = (selectedCompany, companyName) => {
    let validationResults = validateDate(searchValue, setErrors)

    if (Object.keys(validationResults).length === 0) {
      handleStockCandles(selectedCompany, companyName)
    }
  }

  return (
    <Styled.TilesContainer>
      {companyProfileValues?.map(
        (companyProfile, index) =>
          companyProfile.name && (
            <div key={`${index} ${companyProfile.name}`} className='single-tile'>
              <button onClick={() => handleClick(companyProfile.ticker, companyProfile.name)}>
                <p>name : {companyProfile.name}</p>
              </button>
              <p>country : {companyProfile.country}</p>
              <p>currency : {companyProfile.currency}</p>
              <p>web url : {companyProfile.weburl}</p>
            </div>
          ),
      )}
    </Styled.TilesContainer>
  )
}
