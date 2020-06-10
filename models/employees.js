const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  legalName: { type: String, unique: false },
  address: { type: String, unique: false },
  city: { type: String, unique: false },
  st: { type: String, unique: false },
  zipCode: { type: String, unique: false },
  emailAddress: { type: String, unique: false },
  phoneNumber: { type: String, unique: false },
  position: { type: String, unique: false },
  department: { type: String, unique: false },
  startDate: { type: String, unique: false },
  endDate: { type: String, unique: false },
  employmentStatus: { type: String, unique: false },
  shift: { type: String, unique: false },
  manager: { type: String, unique: false },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;