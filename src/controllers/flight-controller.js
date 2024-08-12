const { FlightService } = require("../services/index");
const { SuccessCode, ServerErrorCodes } = require("../utils/error-code");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCode.CREATED).json({
      data: flight,
      message: "flight Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "failed flight creation",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(SuccessCode.OK).json({
      data: flight,
      message: "flight Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "failed flight fetching",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlights(req.query);
    return res.status(SuccessCode.OK).json({
      data: flight,
      message: "flight Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "failed flight fetching",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const flight = await flightService.updateFlight(req.params.id, req.body);
    console.log("flightsdata1", flight);
    return res.status(SuccessCode.OK).json({
      data: flight,
      message: "flight Successfully update",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log("me controller ki error", error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "failed flight update",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
