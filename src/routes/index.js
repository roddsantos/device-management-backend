const express = require("express");
const { CategoryControllers, DeviceControllers } = require("../controllers");
const router = express.Router();

router.post("/category", (req, res) => {
  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Create a category'
    #swagger.requestBody = {
      required: true,
      content: { 
        "application/json": {
          schema: {
              $ref: "#/components/schemas/category"
          } 
        }
      }
    }
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/categoryResponse"
          }
        }           
      }
    }
  */
  CategoryControllers.create(req, res);
});

router.patch("/category", (req, res) => {
  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Update a category'
    #swagger.requestBody = {
      required: true,
      content: { 
        "application/json": {
          schema: {
              $ref: "#/components/schemas/category"
          } 
        }
      }
    }
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/categoryResponse"
          }
        }           
      }
    }
  */
  CategoryControllers.update(req, res);
});

router.get("/category", (req, res) => {
  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Get all cateogries'
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/categories"
          }
        }           
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/internalError"
          }
        }           
      }
    }
  */
  CategoryControllers.getAll(req, res);
});

router.delete("/category/:id", (req, res) => {
  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Delete a category given an id'
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/deleteResponse"
          }
        }           
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/internalError"
          }
        }           
      }
    }
  */
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
