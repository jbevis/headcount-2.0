import React from 'react'

export const ComparisonCard = ({ districtRepository, locationA, locationB, handleToggle, removeCards }) => {
  let comparisonObj = districtRepository.compareDistrictAverages(locationA, locationB)

  return (
    <article id='compare-card' className="district-card" onClick={() => {
      removeCards()
    }} >
      <h3 className="compare-location">{locationA}</h3>
      <p  className="compare-data">{comparisonObj[locationA.toUpperCase()]}</p>
      <p  className="compare-data">{comparisonObj.compared}</p>
      <p  className="compare-data">{comparisonObj[locationB.toUpperCase()]}</p>
      <h3 className="compare-location">{locationB}</h3>
    </article>
  )
}
