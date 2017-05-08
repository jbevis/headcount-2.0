import React from 'react';
import { Card } from './Card';

export const CardList = ({ kinderData, handleToggle, districtRepository, dataCompare }) => {
    if (!kinderData) {
      return (
        <h4 id='no-data-found'>Headcount 2.0 needs a data source</h4>
      )
    }

    return (
      <section id="card-list">
        { Object.keys(kinderData).map((key, index) => {
          return (
            <Card
              location={ kinderData[key].location }
              data={ kinderData[key].data }
              handleToggle={ handleToggle }
              districtRepository={districtRepository}
              dataCompare={dataCompare}
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
