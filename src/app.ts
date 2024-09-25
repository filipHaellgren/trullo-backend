import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'; // Justera efter din struktur
import taskRoutes from './routes/taskRoutes'; // Importera task-rutterna

const app = express();
app.use(express.json()); // Middleware för att hantera JSON-innehåll

// Anslut till MongoDB
mongoose.connect('mongodb://localhost:27017/trullo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Använda rutterna
app.use('/api/users', userRoutes); // Använd user-rutter
app.use('/api/tasks', taskRoutes); // Använd task-rutter

// Starta servern
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
