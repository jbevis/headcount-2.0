import React from 'react';

export const Year = ({ year }) => {
  return (
    <section>
      { Object.keys(year).map((key, index) => {
        return (
          <p>{key}</p>
        )
      }) }
    </section>
  )
}
