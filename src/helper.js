export default class DistrictRepository {
  constructor(data){
    this.data = this.dataCleanFunction(data) || {}
  }

  dataCleanFunction(dataSet) {
    return dataSet.reduce((acc, val) => {
        !acc[val.Location] ?
          acc[val.Location] = {[val.TimeFrame]: val.Data} :
          acc[val.Location][val.TimeFrame] = val.Data

        return acc
      }, {})

  }
}
