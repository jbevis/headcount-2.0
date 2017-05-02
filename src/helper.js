export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleanFunction(data) || {}
  }

  dataCleanFunction(dataSet) {
    return dataSet.reduce((acc, val) => {
      let { Location, TimeFrame, Data } = val;
      let upperCaseLocation = Location.toUpperCase();
      let formatData = Data.toFixed(3);
      console.log(formatData)

      if (!acc[Location]) {
        acc[upperCaseLocation] = {};
        acc[upperCaseLocation].location = Location;
        acc[upperCaseLocation].data = {};
      }

      acc[upperCaseLocation].data[TimeFrame] = formatData;
      return acc
    }, {})
  }

  findByName(name) {
    let upperCaseName = name.toUpperCase();
    if (!upperCaseName) {
      return undefined;
    }
    let school = Object.keys(this.data).filter(key => {
      if (upperCaseName === key) {
        return this.data[key]
      }
    })
    return this.data[school]
  }
}
