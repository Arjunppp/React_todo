import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodoCard } from "./TodoCard";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const DisplayTodo = () => {
  const [allTodo, setAllTodo] = useState([]);
  useEffect(() => {
    async function fetchAlltodos() {
      const allTodos = await axios.get(serverUrl);
      setAllTodo(allTodos.data);
    }
    fetchAlltodos();
  }, []);

  return <div className="grid grid-cols-3 gap-3">
    {allTodo.map((each) =>
    {
      return <TodoCard key={each._id} title={each.title} content={each.content} />
    } 
    )}
  </div>;
};
