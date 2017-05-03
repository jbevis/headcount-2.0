import React from 'react';

export const YearlyData = ({ yearData }) => {
  return (
    <section>
      { Object.keys(yearData).map((key, index) => {
        if (yearData[key] < 0.5) {
          return (
            <p className='below' key={index}>{yearData[key]}</p>
          )
        }
        return (
          <p className='above' key={index}>{yearData[key]}</p>
        )
      }) }
    </section>
  )
}

const { object } = React.PropTypes
YearlyData.propTypes = {
  yearData: object.isRequired
}
