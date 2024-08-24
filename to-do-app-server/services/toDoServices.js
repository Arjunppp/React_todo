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

};

export async function deleteTodo(taskId) {

    try {
        await Todo.findByIdAndUpdate({ _id: taskId } ,{isDeleted:true});

    } catch (error) {
        throw error

    }

};


export async function updateTodo(todo , id) {

    const {title , content} = todo;
    await Todo.findByIdAndUpdate({_id:id} ,{title:title , content:content})
    
};

export async function getCompletedTasks() {

    const completedTasks = await Todo.find({isDeleted:true})
    return completedTasks;
}