const { where, Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }

    let priceFilter = [];

    if (data.minPrice) {
      // Object.assign(filter, {
      //   [Op.gte]: data.minPrice,
      // });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      // Object.assign(filter, {
      //   [Op.lte]: data.maxPrice,
      // });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(FlightId) {
    try {
      const flight = await Flight.findByPk(FlightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the Repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      console.log("lay 3", flight);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer", error);
      throw { error };
    }
  }
}

module.exports = FlightRepository;
