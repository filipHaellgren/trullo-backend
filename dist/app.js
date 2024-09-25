"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Justera efter din struktur
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes")); // Importera task-rutterna
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware för att hantera JSON-innehåll
// Anslut till MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/trullo')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
// Använda rutterna
app.use('/api/users', userRoutes_1.default); // Använd user-rutter
app.use('/api/tasks', taskRoutes_1.default); // Använd task-rutter
// Starta servern
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
