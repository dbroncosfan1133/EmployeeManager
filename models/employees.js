const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  full_name: { type: String, unique: false },
  address: { type: String, unique: false },
  city: { type: String, unique: false },
  state: { type: String, unique: false },
  zip_code: { type: String, unique: false },
  email_address: { type: String, unique: false },
  phone_number: { 
    type: String, 
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, "Employee phone number required"],
    unique: false
  },
  position: { type: String, unique: false },
  department: { type: String, unique: false },
  start_date: { type: String, unique: false },
  end_date: { type: String, unique: false },
  employment_status: { type: String, unique: false },
  shift: { type: String, unique: false },
  manager: { type: String, unique: false },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;