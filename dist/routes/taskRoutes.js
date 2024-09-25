"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Task_1 = require("../models/Task");
const router = express_1.default.Router(); // Skapa en router
// Rutt för att skapa en ny task
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, assignedTo } = req.body;
    try {
        const newTask = new Task_1.Task({ title, description, status, assignedTo });
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: 'Failed to create task', details: error.message });
        }
        else {
            res.status(500).json({ error: 'Failed to create task', details: 'Unknown error' });
        }
    }
}));
// Exportera routern
exports.default = router;
