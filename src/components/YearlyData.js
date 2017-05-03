import React from 'react';

export const YearlyData = ({ yearData }) => {
  return (
    <section>
      { Object.keys(yearData).map((key, index) => {
        return (
          <p>{yearData[key]}</p>
        )
      }) }
    </section>
  )
}
