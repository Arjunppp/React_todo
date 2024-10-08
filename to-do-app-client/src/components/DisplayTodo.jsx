import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodoForm } from "./TodoForm";
import { TodoCard } from "./TodoCard";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const DisplayTodo = () => {
  const [allTodo, setAllTodo] = useState([]);
  const [chnageTask, setChangeTask] = useState({
    isEdit: false,
    id: "",
    title: "",
    content: "",
  });
  const [deleteTask, setDeleteTask] = useState("");

  useEffect(() => {
    async function fetchAlltodos() {
      const allTodos = await axios.get(serverUrl);
      setAllTodo(allTodos.data);
    }
    fetchAlltodos();
  }, [chnageTask]);

  useEffect(() => {
    if (deleteTask !== "") {
      async function deleteTodo(deleteTask) {
        const deleteUrl = `${serverUrl}/${deleteTask}`;
        console.log(deleteUrl);

        await axios.delete(deleteUrl);
        setAllTodo((prevTodos) =>
          prevTodos.filter((todo) => todo._id !== deleteTask)
        );
      }

      deleteTodo(deleteTask);
      setDeleteTask("");
    }
  }, [deleteTask]);

  const handleEdit = (state, id, title, content) => {
    setChangeTask({ isEdit: state, id: id, title: title, content: content });
  };

  const handleDelte = (id) => {
    setDeleteTask(id);
  };

  const handleChangeTask = () => {
    setChangeTask((prevTask) => ({ ...prevTask, isEdit: false }));
  };

  return (
    <div className={`${!chnageTask.isEdit ? `grid grid-cols-3 gap-3 w-full` : "w-full flex justify-center"} max-h-screen overflow-auto p-10`}>
      {chnageTask.isEdit ? (
        <TodoForm
          id={chnageTask.id}
          title={chnageTask.title}
          content={chnageTask.content}
          setEdit={handleChangeTask}  
        />
      ) : (
        allTodo.length > 0 ? (allTodo.map((each) => {
          return (
            <TodoCard
              key={each._id}
              id={each._id}
              title={each.title}
              content={each.content}
              handleEdit={handleEdit}
              handleDelete={handleDelte}
            />
          );
        })) : "No Todos Created"
      )}
    </div>
  );
};
