import React from 'react';
import { useContext } from 'react';
import { displayContext } from "../context/context";

export const TodoForm = () => {
  const setCreate = useContext(displayContext);
  return (
    <div className='h-3/4 w-2/3 flex flex-col items-center justify-center  gap-3'>
      
        <input type="text"  name='title' placeholder='Add title' className='h-10 w-full  bg-slate-200 rounded-lg text-black pl-4' />
     
     
        <textarea name="content" id="" placeholder='Add content' className='h-2/4 w-full  bg-slate-200 rounded-lg text-black pl-4 pt-4'></textarea>
      
      <div>
        <button  onClick={() => setCreate(false)} className='bg-slate-200 p-3 rounded-lg'>Create Task</button>
      </div>
    </div>
  )
}
