import React, { useState } from "react";
import { Navbar } from "./Navbar";
import {DisplayTodo} from './DisplayTodo'
import {TodoForm} from './TodoForm'
import { Sidebar } from "./Sidebar";
import { displayContext } from "../context/context";


export const Home = () => {
 
  
  const [isCreate, setCreate] = useState(false);
  return (
   <displayContext.Provider value={{isCreate , setCreate}} >
     <div className="flex flex-col h-screen">
      <div className="h-1/6 z-10">
        <Navbar />
      </div>
      <div className="h-5/6 flex">
        <div className="w-1/4 h-full">
          <Sidebar />
        </div>
        <div className="w-3/4 h-full flex items-center justify-center">
        {isCreate ? <TodoForm /> : <DisplayTodo />}
        </div>
      </div>
    </div>
   </displayContext.Provider>
  );
};
