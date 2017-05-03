import React from 'react';

export const Year = ({ year }) => {
  return (
    <section>
      { Object.keys(year).map((key, index) => {
        return (
          <p key={index}>{key}</p>
        )
      }) }
    </section>
  )
}

const { object } = React.PropTypes
Year.propTypes = {
  year: object.isRequired
}
