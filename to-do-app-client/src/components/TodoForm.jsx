import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { displayContext } from "../context/context";

const serverUrl = import.meta.env.VITE_SERVER_URL;
export const TodoForm = () => {
  const [task, setTask] = useState({ title: "", content: "" });
  const [isSubmit, setSubmit] = useState(false);
  const [isEmpty, setEmpty] = useState({
    state: false,
    title: "",
    content: "",
  });
  const Create = useContext(displayContext);
  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  useEffect(() => {
    if (isSubmit) {
      if (task.title == "" || task.content == "") {
        setEmpty({
          state: true,
          title: task.title === "" ? "Title is required" : "",
          content: task.content === "" ? "Content is required" : "",
        });
      } else {
        async function createTodo(task) {
          await axios.post(serverUrl, task);
        }

        createTodo(task);
        Create.setCreate(false);
      }
      setSubmit(false);
    } 
  }, [isSubmit]);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-3/4 w-2/3 flex flex-col items-center justify-center  gap-3"
    >
      <input
        type="text"
        name="title"
        placeholder={isEmpty.state ? isEmpty.title : "Add title"}
        onChange={handleChange}
        className={`h-10 w-full  bg-slate-200 rounded-lg pl-4 ${(isEmpty.state && task.title ==="") ? "border border-red-500" : ""}`}
      />

      <textarea
        name="content"
        placeholder={isEmpty.state ? isEmpty.content : "Add content"}
        onChange={handleChange}
        className={`h-2/4 w-full  bg-slate-200 rounded-lg pl-4 pt-4  ${(isEmpty.state && task.content ==="") ? "border border-red-500" : ""}`}
      ></textarea>

      <div>
        <button type="submit" className="bg-slate-200 p-3 rounded-lg">
          Create Task
        </button>
      </div>
    </form>
  );
};
