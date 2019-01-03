const { db, Campus, Student } = require('./server/db');
const { green, red } = require('chalk');

// My code for seeding the database:
const campusData = require('./data/campuses.json');
const studentData = require('./data/students.json');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Promise.all(
    campusData.map(async instance => {
      await Campus.create({
        name: instance.name,
        imageUrl: instance.defaultValue,
        address: instance.address,
        description: instance.description,
      });
    }),
    studentData.map(async instance => {
      await Student.create({
        firstName: instance.firstName,
        lastName: instance.lastName,
        email: instance.email,
        imageUrl: instance.defaulValue,
        gpa: instance.gpa,
        campusId: instance.campusId,
      });
    })
  );
  // End of my code in this module
  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
