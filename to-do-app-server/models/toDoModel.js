import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

export const Todo = mongoose.model('Todo', toDoSchema);
