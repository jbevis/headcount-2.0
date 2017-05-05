import React from 'react'
// import DistrictRepository from '../helper'
import { Card } from './Card.js'

export const Comparison = ({ districtRepository , dataCompare, kinderData, handleToggle }) => {
  let a = ''
  let b = ''

  if(!dataCompare.length) {
    console.log('phase1')
    return(
      <div></div>
    )
  } else if (dataCompare.length === 1) {
    a = districtRepository.findByName(dataCompare[0])
    console.log('phase2', a.location, JSON.stringify(a.data));
    return(
      <div>
      <Card
        location={a.location}
        data={a.data}
        handleToggle={handleToggle}
      />
      </div>
    )
  } else if (dataCompare.length === 2) {
    dataCompare.forEach(() => {
      a = districtRepository.findByName(dataCompare[0])
      b = districtRepository.findByName(dataCompare[1])
    })
    console.log('phase3', 'a', a.location, a.data, 'b', b.location, b.data);
    return(
      <section>
        <Card location={a.location}
              data={a.data}
              handleToggle={handleToggle}
        />
        <Card location={b.location}
              data={b.data}
              handleToggle={handleToggle}
        />
      </section>
    )
  }
}
