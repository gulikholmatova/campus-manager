const express = require('express');
const router = express.Router();

const Student = require('../db/students.js')
const Campus = require('../db/campuses.js')

// serving up a main route:
router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send(students)
    } catch (err) {
        next(err);
    }
})
// Route to serve a specific id request:
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await Student.findOne({
            where: { id },
            include: [{ model: Campus, as: 'campus' }]
        })
        res.send(student);
    } catch (err) {
        next(err);
    }
})

// Route to add a new student:
router.post('/', async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        res.json(newStudent);
    } catch (err) {
        next(err);
    }
})

// Route to delete a student:
router.delete('/:id', async (req, res, next) => {
    try {
        const studentToDelete = await Student.findById(req.params.id);
        studentToDelete.destroy();
        res.send(studentToDelete)
    } catch (err) {
        next(err)
    }
})

// Route to update an existing student:
router.put('/:id', async (req, res, next) => {
    try {
        const studentToUpdate = await Student.findById(req.params.id);
        await studentToUpdate.update(req.body);
        res.send(studentToUpdate);
    } catch (err) {
        next(err)
    }
})

module.exports = router;