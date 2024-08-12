const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.create(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully city created",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city creation",
      err: error,
    });
  }
};

const bulk = async (req, res) => {
  try {
    const city = await cityService.bulk(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully bb city created",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city creation",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.get(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully city fetched",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city fetching",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAll(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully city fetched",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city fetching",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.update(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully city updated",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city updation",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const city = await cityService.destroy(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully city deleted",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city deletion",
      err: error,
    });
  }
};

const getAirport = async (req, res) => {
  try {
    const city = await cityService.getAirport(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully city fetched",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed city fetching",
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
  getAll,
  bulk,
  getAirport,
};
