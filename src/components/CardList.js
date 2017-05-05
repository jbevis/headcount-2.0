import React from 'react';
import { Card } from './Card';

export const CardList = ({ kinderData, handleToggle }) => {
    if (!kinderData) {
      return (
        <h4>Some shit should go here</h4>
      )
    }

    return (
      <section id="card-list">
        { Object.keys(kinderData).map((key, index) => {
          return (
            <Card
              location={ kinderData[key].location }     data={ kinderData[key].data }
              handleToggle={ handleToggle }
            />
          )
        }) }
      </section>
    )
  }


const { object } = React.PropTypes
CardList.propTypes = {
  kinderData: object.isRequired
}
