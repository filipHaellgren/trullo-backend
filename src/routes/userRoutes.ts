import express from 'express';
import { User } from '../models/User';

const router = express.Router(); // Skapa en router

// Rutt för att skapa en ny användare
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create user', details: 'Unknown error' });
    }
  }
});

// Rutt för att hämta alla användare
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Hämta alla användare
    res.status(200).json(users); // Returnera användarna
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to fetch users', details: 'Unknown error' });
    }
  }
});

// Rutt för att uppdatera en användare
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true, runValidators: true } // returnera den uppdaterade användaren
    );
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to update user', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to update user', details: 'Unknown error' });
    }
  }
});

// Rutt för att ta bort en användare
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(204).send(); // Ingen innehåll att returnera
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to delete user', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to delete user', details: 'Unknown error' });
    }
  }
});

// Exportera routern
export default router;
