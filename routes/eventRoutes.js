const router = require('express').Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.get('/:id', eventController.getEventDetails);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
module.exports = router;
