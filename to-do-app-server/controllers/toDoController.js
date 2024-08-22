import * as toDoServices from '../services/toDoServices.js'

export async function handleGetAllTodo(req, res) {
    try {
        const AlltoDos = await toDoServices.getAllToDo();
        res.send(AlltoDos);

    } catch (error) {

        console.error(error);


    }

};

export async function handleCreateTodo(req, res) {


    try {
        const { title, content } = req.body;
        await toDoServices.createTodo(title, content);
        res.send('Created')

    } catch (error) {

        console.error(error);
        

    }




};