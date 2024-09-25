import express from 'express';
import { Task } from '../models/Task';

const router = express.Router(); // Skapa en router

// Route för att skapa en ny uppgift
router.post('/', async (req, res) => {
  const { title, description, status, assignedTo } = req.body;

  try {
    const newTask = new Task({ title, description, status, assignedTo });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to create task', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create task', details: 'Unknown error' });
    }
  }
});

// Route för att hämta alla uppgifter
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // Hämta alla uppgifter
    res.status(200).json(tasks); // Returnera uppgifterna
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to fetch tasks', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to fetch tasks', details: 'Unknown error' });
    }
  }
});

// Route för att uppdatera en uppgift
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status, assignedTo } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status, assignedTo },
      { new: true, runValidators: true } // returnera den uppdaterade uppgiften
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to update task', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to update task', details: 'Unknown error' });
    }
  }
});

// Route för att ta bort en uppgift
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).send(); // Ingen innehåll att returnera
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to delete task', details: error.message });
    } else {
      res.status(500).json({ error: 'Failed to delete task', details: 'Unknown error' });
    }
  }
});

// Exportera routern
export default router;
