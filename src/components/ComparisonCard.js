import React from 'react'

export const ComparisonCard = ({ districtRepository, locationA, locationB, handleToggle, removeCards }) => {
  let comparisonObj = districtRepository.compareDistrictAverages(locationA, locationB)

  return (
    <article className="district-card" onClick={() => {
      removeCards()
    }} >
      <h3>{locationA}</h3>
      <p>{comparisonObj[locationA.toUpperCase()]}</p>
      <p>{comparisonObj.compared}</p>
      <p>{comparisonObj[locationB.toUpperCase()]}</p>
      <h3>{locationB}</h3>
    </article>
  )
}
