import React from 'react'
// import DistrictRepository from '../helper'
import { Card } from './Card.js'
import { ComparisonCard } from './ComparisonCard'

export const Comparison = ({ districtRepository , dataCompare, kinderData, handleToggle, removeCards }) => {
  let a = ''
  let b = ''

  if(!dataCompare.length) {
    console.log('phase1')
    return(
      <div></div>
    )
  } else if (dataCompare.length === 1) {
    a = districtRepository.findByName(dataCompare[0])
    return(
      <section className="compare-field">
        <Card
          location={a.location}
          data={a.data}
          handleToggle={handleToggle}
          districtRepository={districtRepository}
          dataCompare={dataCompare}

        />
      </section>
    )
  } else if (dataCompare.length === 2) {
    dataCompare.forEach(() => {
      a = districtRepository.findByName(dataCompare[0])
      b = districtRepository.findByName(dataCompare[1])
    })
    console.log('phase3', 'a', a.location, a.data, 'b', b.location, b.data);
    return(
      <section className="compare-field">
        <Card location={a.location}
              data={a.data}
              handleToggle={handleToggle}
              districtRepository={districtRepository}
              dataCompare={dataCompare}


        />
        <ComparisonCard
              districtRepository={ districtRepository }
              locationA={a.location}
              locationB={b.location}
              handleToggle={handleToggle}
              removeCards={removeCards}
        />
        <Card location={b.location}
              data={b.data}
              handleToggle={handleToggle}
              districtRepository={districtRepository}
              dataCompare={dataCompare}


        />
      </section>
    )
  }
}
