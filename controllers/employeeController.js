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
      legalName: req.body.legalName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      position: req.body.position,
      department: req.body.department,
      startDate: req.body.startDate,
      employmentStatus: req.body.employmentStatus,
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
