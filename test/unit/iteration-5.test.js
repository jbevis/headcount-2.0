import DistrictRepository from '../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

describe('DistrictRepository iteration 5', () =>  {
  const district = new DistrictRepository(kinderData)

  test('findAverage returns average of a districts data', () => {
    const test = 'Colorado'
    let results = district.findAverage(test)

    expect(results).toEqual(0.53)
  })

  test('selectionId', () => {
    const testArrayOne= []
    const testArrayTwo = ['Colorado']

    let resultsOne = district.selectionId('Colorado', testArrayOne)
    expect(resultsOne).toEqual("")

    let resultsTwo = district.selectionId('Colorado', testArrayTwo)
    expect(resultsTwo).toEqual('is-selected')
  })

  test('filterOnChange', () => {
    let data = district.data
    let result = district.filterOnChange('Col', data)
    let expected = { COLORADO:
         { location: 'Colorado',
           data:
            { '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337,
              '2007': 0.395,
              '2008': 0.536,
              '2009': 0.598,
              '2010': 0.64,
              '2011': 0.672,
              '2012': 0.695,
              '2013': 0.703,
              '2014': 0.741 } },
        'COLORADO SPRINGS 11':
         { location: 'COLORADO SPRINGS 11',
           data:
            { '2004': 0.069,
              '2005': 0.509,
              '2006': 0.638,
              '2007': 0.994,
              '2008': 0.992,
              '2009': 1,
              '2010': 0.993,
              '2011': 0.994,
              '2012': 0.993,
              '2013': 0.989,
              '2014': 0.994 } } }

  expect(result).toEqual(expected)
  })
})
