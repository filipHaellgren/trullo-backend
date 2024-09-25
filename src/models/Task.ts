import mongoose, { Document, Schema } from 'mongoose';

// Definiera ett gränssnitt för Task
export interface ITask extends Document {
  title: string;
  description: string;
  status: string; // ex. "to-do", "in progress", "blocked", "done"
  assignedTo: string; // ID för den användare som uppgiften är tilldelad
}

// Skapa schema för Task
const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: ['to-do', 'in progress', 'blocked', 'done'] },
  assignedTo: { type: String, required: false }, // Kan vara null eller en referens till en User
}, { timestamps: true });

// Exportera modellen
export const Task = mongoose.model<ITask>('Task', taskSchema);
