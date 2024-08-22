import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { displayContext } from "../context/context";

export const Sidebar = () => {
  const setCreate = useContext(displayContext);
  return (
    
    <div className="h-full bg-slate-200 pl-4 pt-3">
     
        <button onClick={() => setCreate(true)} className="flex items-center gap-2 justify-center w-auto h-auto bg-white p-4 rounded-2xl">
          <PlusIcon className="h-6 w-6" />
          Create Task
        </button>
     
    </div>
  );
};
