import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { DisplayTodo } from "./DisplayTodo";
import { TodoForm } from "./TodoForm";
import { Sidebar } from "./Sidebar";
import { displayContext } from "../context/context";
import { Completed } from "./Completed";

export const Home = () => {
  const [isCreate, setCreate] = useState(false);
  const [isCompleted, setCompleted] = useState(false);
  return (
    <displayContext.Provider
      value={{ isCreate, setCreate, isCompleted, setCompleted }}
    >
      <div className="flex flex-col h-screen">
        <div className="h-1/6 z-10">
          <Navbar />
        </div>
        <div className="h-5/6 flex">
          <div className="w-1/4 h-full">
            <Sidebar />
          </div>
          <div className="w-3/4 h-full flex flex-col items-center justify-center">
          <h1 className="p-5 flex items-center w-full border text-lg font-bold border-x-white justify-center bg-slate-200">{isCompleted ? "Completed Todos" : (isCreate ? "Create Todo" : "Created Todos")}</h1>
            <div className="w-3/4 h-full flex flex-col gap-3 items-center justify-center">
              {isCompleted ? (
                <>
                  <Completed />
                </>
              ) : isCreate ? (
                <>
                  <TodoForm />
                </>
              ) : (
                <>
                  <DisplayTodo />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </displayContext.Provider>
  );
};
