import express from 'express';
import { getEvents, createEvent } from '../controllers/eventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', authMiddleware, createEvent);

export default router;
