const express = require("express");
const { CategoryControllers, DeviceControllers } = require("../controllers");
const router = express.Router();

router.post("/category", (req, res) => {
  CategoryControllers.create(req, res);
});

router.patch("/category", (req, res) => {
  CategoryControllers.update(req, res);
});

router.get("/category", (req, res) => {
  CategoryControllers.getAll(req, res);
});

router.delete("/category/:id", (req, res) => {
  CategoryControllers.delete(req, res);
});

router.get("/device", (req, res) => {
  DeviceControllers.getAll(req, res);
});

router.patch("/device", (req, res) => {
  DeviceControllers.update(req, res);
});

router.post("/device", (req, res) => {
  DeviceControllers.create(req, res);
});

router.delete("/device:id", (req, res) => {
  DeviceControllers.delete(req, res);
});

module.exports = router;
