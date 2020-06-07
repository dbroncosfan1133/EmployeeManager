const router = require("express").Router();
const employeeRoutes = require("./employees");

router.use("/", employeeRoutes);

module.exports = router;
