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
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
    #swagger.summary = 'Get all categories'
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
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
  /*
    #swagger.tags = ['Device']
    #swagger.summary = 'Get all devices'
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/devices"
          }
        }           
      }
    }
    #swagger.responses[500] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
          }
        }           
      }
    }
  */
  DeviceControllers.getAll(req, res);
});

router.patch("/device", (req, res) => {
  /*
    #swagger.tags = ['Device']
    #swagger.summary = 'Update a device'
    #swagger.requestBody = {
      required: true,
      content: { 
        "application/json": {
          schema: {
              $ref: "#/components/schemas/device"
          } 
        }
      }
    }
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/deviceResponse"
          }
        }           
      }
    }
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
  DeviceControllers.update(req, res);
});

router.post("/device", (req, res) => {
  /*
    #swagger.tags = ['Device']
    #swagger.summary = 'Create a device'
    #swagger.requestBody = {
      required: true,
      content: { 
        "application/json": {
          schema: {
              $ref: "#/components/schemas/device"
          } 
        }
      }
    }
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/deviceResponse"
          }
        }           
      }
    }
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
  DeviceControllers.create(req, res);
});

router.delete("/device/:id", (req, res) => {
  /*
    #swagger.tags = ['Device']
    #swagger.summary = 'Delete a device'
    #swagger.responses[200] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/deleteResponse"
          }
        }           
      }
    }
    #swagger.responses[400] = {
      content: {
        "application/json": {
          schema:{
            $ref: "#/components/schemas/fieldRequiredResponse"
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
  DeviceControllers.delete(req, res);
});

module.exports = router;
