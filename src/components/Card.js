import React from 'react';
import { Year } from './Year'
import { YearlyData } from './YearlyData'

export const Card = ({ kinderData, handleToggle }) => {
  return (
    <section>
      { Object.keys(kinderData).map((key, index) => {
        return (
          <article  className='district-card'
                    key={index}
                    onClick={(e) => { handleToggle(e) } }>
            <h3>{ kinderData[key].location }</h3>
            <section>
              <Year year={kinderData[key].data}/>
              <YearlyData yearData={kinderData[key].data}/>
            </section>
          </article>
        )
      }) }
    </section>
  )
}

const { object } = React.PropTypes
Card.propTypes = {
  kinderData: object.isRequired
}
