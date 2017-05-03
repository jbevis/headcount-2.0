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
}
