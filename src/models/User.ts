import mongoose, { Document, Schema } from 'mongoose';

// Definiera ett gränssnitt för User
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Skapa schema för User
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

// Exportera modellen
export const User = mongoose.model<IUser>('User', userSchema);
