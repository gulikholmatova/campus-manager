'use strict';

const db = require('./database');

const Campus = require('./campuses');
const Student = require('./students');

// Setting relationships between models:
Student.belongsTo(Campus, { as: 'campus' }); //
Campus.hasMany(Student);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Campus,
  Student,
};
