export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleanFunction(data) || {}
  }

  dataCleanFunction = (dataSet) => {
    return dataSet.reduce((acc, val) => {
      let { Location, TimeFrame, Data } = val;
      let upperCaseLocation = Location.toUpperCase();
      // let formatData = Data.toFixed(3) || 0;
      let formatData = Math.round(Data*1000)/1000 || 0

      if (!acc[upperCaseLocation]) {
        acc[upperCaseLocation] = {};
        acc[upperCaseLocation].location = Location;
        acc[upperCaseLocation].data = {};
      }

      acc[upperCaseLocation].data[TimeFrame] = formatData;
      return acc
    }, {})
  }

  findByName(name='') {
    let upperCaseName = name.toUpperCase()
    return this.data[upperCaseName]
  }

  findAllMatches(name='') {
    let upperCaseName = name.toUpperCase()
    let keys = Object.keys(this.data);

    if (!upperCaseName) {
      return keys;
    }

    return keys.filter((key) => {
      return key.includes(upperCaseName)
    })
  }

  filterOnChange(district, data) {
    let matches = this.findAllMatches(district)
    let matchedDistricts = matches.reduce((acc, key) => {
      if (!acc[key]) {
      acc[key] = this.data[key]
    }
      return acc
    }, {})
    return matchedDistricts
  }

  findAverage(district) {
    let districtObj = this.findByName(district)
    let dataKeys = Object.keys(districtObj.data)

    let dataTotal = dataKeys.reduce((acc, key) => {
       return acc + districtObj.data[key]
    }, 0)
    let avg = dataTotal/dataKeys.length
    return Math.round(avg*1000)/1000 || 0
  }

  compareDistrictAverages (a, b) {
    let upperA = a.toUpperCase()
    let upperB = b.toUpperCase()
    let avgA = this.findAverage(a)
    let avgB = this.findAverage(b)
    let compared = Math.round(avgA/avgB*1000)/1000 || 0

    let output = Object.assign({}, {[upperA]: avgA }, { [upperB]: avgB }, {compared: compared})
    return output
  }
}
