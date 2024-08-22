import { Todo } from '../models/toDoModel.js'

export async function getAllToDo() {

    try {
        const allToDos = await Todo.find({ isDeleted: false });
        return allToDos
    } catch (error) {
        throw error
    }

};


export async function createTodo(title, content) {

    try {
        const newTodo = new Todo({ title, content });
        await newTodo.save();

    } catch (error) {
        throw error;
    }

}