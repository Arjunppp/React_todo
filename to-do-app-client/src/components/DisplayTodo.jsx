import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodoCard } from "./TodoCard";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const DisplayTodo = () => {
  const [allTodo, setAllTodo] = useState([]);
  const [chnageTask, setChangeTask] = useState({
    id: "",
    title: "",
    content: "",
  });
  useEffect(() => {
    async function fetchAlltodos() {
      const allTodos = await axios.get(serverUrl);
      setAllTodo(allTodos.data);
    }
    fetchAlltodos();
  }, []);

  const handleEdit = (id, title, content) => {
    setChangeTask({ id: id, title: title, content: content });
  };
  console.log(chnageTask.id);
  
  return (
    <div className="grid grid-cols-3 gap-3 max-h-screen overflow-auto  p-10">
      {allTodo.map((each) => {
        return (
          <TodoCard
            key={each._id}
            id={each._id}
            title={each.title}
            content={each.content}
            handleEdit = {handleEdit}
          />
        );
      })}
    </div>
  );
};
