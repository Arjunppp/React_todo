import React from "react";
import { PlusIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { displayContext } from "../context/context";

export const Sidebar = () => {
  const create = useContext(displayContext);
  const toggleState = () => {
    create.isCreate ? create.setCreate(false) : create.setCreate(true);
    create.setCompleted(false)
  };
  const toggleCompleted = () => {
    create.isCompleted ? create.setCompleted(false) : create.setCompleted(true);
    
  };
  return (
    <div className="h-full flex justify-center bg-slate-200 pl-4 pt-3">
      <div className="flex flex-col gap-3 w-44 ">
        <button
          onClick={toggleState}
          className="flex items-center gap-2 justify-center w-auto h-auto bg-white p-4 rounded-2xl"
        >
          {create.isCreate ? (
            <>
              <EyeIcon className="h-6 w-6" /> View Todos
            </>
          ) : (
            <>
              <PlusIcon className="h-6 w-6" /> Create Todo
            </>
          )}
        </button>

        <button
          onClick={toggleCompleted}
          className="flex items-center gap-2 justify-center w-auto h-auto bg-white p-4 rounded-2xl"
        >
          {create.isCompleted ? "All Todos" : "Completed Todos"}
        </button>
      </div>
    </div>
  );
};
