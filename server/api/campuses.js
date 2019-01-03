const express = require('express');
const router = express.Router();

const Campus = require('../db/campuses.js');
const Student = require('../db/students.js')

// Serving up the main routes:
router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.send(campuses)
    } catch (err) {
        next(err)
    }
})
// Route to serve a specific id request:
router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const campus = await Campus.findOne({
            where: { id },
            include: [{ model: Student }]
        });
        res.send(campus);
    } catch (err) {
        next(err)
    }
})

// Route to add a new campus:
router.post("/", async (req, res, next) => {
    try {
        const newCampus = await Campus.create(req.body);
        res.json(newCampus);
    } catch (err) {
        next(err)
    }
})

// Route to delete a campus:
router.delete("/:id", async (req, res, next) => {
    try {
        const campusToDelete = await Campus.findById(req.params.id);
        await campusToDelete.destroy();
        res.send(campusToDelete)
    } catch (err) {
        next(err)
    }
})

// Route to update an existing campus:
router.put('/:id', async (req, res, next) => {
    try {
        const campusToUpdate = await Campus.findById(req.params.id);
        await campusToUpdate.update(req.body);
        res.send(campusToUpdate);
    } catch (err) {
        next(err);
    }
})

module.exports = router;

