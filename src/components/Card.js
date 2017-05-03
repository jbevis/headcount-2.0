import React from 'react';
import { Year } from './Year'
import { YearlyData } from './YearlyData'

export const Card = ({ kinderData }) => {
  return (
    <section>
      { Object.keys(kinderData).map((key, index) => {
        return (
          <section key={index}>
            <h3>{ kinderData[key].location }</h3>
            <section>
              <Year year={kinderData[key].data}/>
              <YearlyData yearData={kinderData[key].data}/>
            </section>
          </section>
        )
      }) }
    </section>
  )
}

const { object } = React.PropTypes
Card.propTypes = {
  kinderData: object.isRequired
}
