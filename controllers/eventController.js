import Event from '../models/Event.js';

// Crear un evento
export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: 'Error creando evento', error });
  }
};

// Obtener eventos
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo eventos', error });
  }
};
