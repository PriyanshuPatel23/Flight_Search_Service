const CrudRepository = require("./crud-repository");
const { City, Airport } = require("../models/index");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }

  async getAirport(CityId) {
    try {
      //1st method

      //  const city = await City.findOne({
      //   where:{
      //     id:CityId
      //   },
      //   include:[{
      //     model:Airport
      //   }]
      //  });
      //  return city;

      //2nd Method below

      const city = await City.findOne({
        where: {
          id: CityId,
        },
      });
      const airports = await city.getAirports();
      return { city, airports };
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
