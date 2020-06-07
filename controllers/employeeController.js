const db = require("../models");

// Defining methods for the employeeController
module.exports = {
  findAll: function(req, res) {
    db.Employee
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Employee
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const tempObj = {
      full_name: req.body.full_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number,
      position: req.body.position,
      department: req.body.department,
      start_Date: req.body.start_Date,
      end_date: req.body.end_date,
      employment_status: req.body.employment_status,
      shift: req.body.shift,
      manager: req.body.manager
    }
    db.Employee
      .create(tempObj)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Employee
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Employee
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
