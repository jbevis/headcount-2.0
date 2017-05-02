export default class DistrictRepository {
  constructor(data) {
    this.data = this.dataCleanFunction(data) || {}
  }

  dataCleanFunction(dataSet) {
    return dataSet.reduce((acc, val) => {
      // !acc[val.Location] ?
      //     acc[val.Location] = {[val.TimeFrame]: val.Data} :
      //     acc[val.Location][val.TimeFrame] = val.Data
      let { Location, TimeFrame, Data } = val;
      if (!acc[Location]) {
        acc[Location] = {};
        acc[Location].location = Location;
        acc[Location].data = {};
      }

      acc[val.Location].data[val.TimeFrame] = val.Data

      return acc
    }, {})
  }

  findByName(name) {
   if (!name) {
     return undefined;
   }
   let school = Object.keys(this.data).filter(key => {
     if (name === key) {
       return this.data[key]
     }
   })
   return this.data[school]
  }
}
