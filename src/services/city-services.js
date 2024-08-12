const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

const cityRepository = new CityRepository();

class CityService extends CrudService {
  constructor() {
    const cityRepository = new CityRepository();
    super(cityRepository);
  }

  async getAirport(CityId) {
    try {
      const result = await cityRepository.getAirport(CityId);
      return result;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
