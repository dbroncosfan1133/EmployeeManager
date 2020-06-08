const express = require("express")
const router = require("express").Router();
const employeeRoutes = require("./employees");

router.use("/details", employeeRoutes);

module.exports = router;
