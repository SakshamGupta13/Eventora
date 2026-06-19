const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/auth');

// Get all events
router.get('/', getEvents);

// Get event by id
router.get('/:id', getEventById);

// only by admin
router.post('/', protect, admin, createEvent);

// only by admin
router.put('/:id', protect, admin, updateEvent);

// only by admin
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;