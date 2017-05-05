import React from 'react'

export const ComparisonCard = ({ districtRepository, locationA, locationB }) => {
  let comparisonObj = districtRepository.compareDistrictAverages(locationA, locationB)

  return (
    <section>
      <h3>{locationA}</h3>
      <p>{comparisonObj[locationA.toUpperCase()]}</p>
      <p>{comparisonObj.compared}</p>
      <p>{comparisonObj[locationB.toUpperCase()]}</p>
      <h3>{locationB}</h3>
    </section>
  )
}
