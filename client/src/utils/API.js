import axios from "axios";

export default {
  // Gets all Employees
  getEmployees: function() {
    return axios.get("/api/details");
  },
  // Gets the employee with the given id
  getEmployeeDetails: function(id) {
    return axios.get("/api/details/" + id);
  },
  // Deletes the empolyee data with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/details/" + id);
  },
  // Saves a new employee to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/details", employeeData);
  }
};