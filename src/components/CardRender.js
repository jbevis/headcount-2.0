import React from 'react';
import { Card } from './Card';

export const CardRender = ({ kinderData }) => {
    if (!kinderData) {
      return (
        <h4>Some shit should go here</h4>
      )
    }
    return (
      <section>
        <Card kinderData={ kinderData }/>
      </section>
    )
}

const { object } = React.PropTypes
CardRender.propTypes = {
  kinderData: object.isRequired
}
