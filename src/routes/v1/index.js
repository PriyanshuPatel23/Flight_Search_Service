const express = require("express");
const { FlightMiddleware } = require("../../middlewares/index");
const {
  CityController,
  AirportController,
  AirplaneController,
  FlightController,
} = require("../../controllers/index");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/citybulk", CityController.bulk);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/cityAirport/:id", CityController.getAirport);

router.post("/airport", AirportController.create);
router.post("/airportbulk", AirportController.bulk);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getall);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);

router.post("/airplane", AirplaneController.create);
router.post("/airplanebulk", AirplaneController.bulk);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getall);
router.delete("/airplane/:id", AirplaneController.destroy);
router.patch("/airplane/:id", AirplaneController.update);

router.post(
  "/flights",
  FlightMiddleware.validateFlight,
  FlightController.create
);
router.post("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.put("/flights/:id", FlightController.update);

module.exports = router;
