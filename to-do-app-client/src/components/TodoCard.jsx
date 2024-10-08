import React ,{useState} from "react";
import { StarIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const TodoCard = (props) => {
  
  const [isYellow , setYellow] =useState(false);
  const handleEdit =() => 
  {
    props.handleEdit(true, props.id ,props.title , props.content);
  }
  const handleDelete =() => 
  {
    props.handleDelete(props.id)

  }
  return (
    <div className="border flex flex-col p-4 gap-3 items-center justify-center rounded-lg bg-slate-200">
      <h3 className="border w-full flex justify-center">{props.title}</h3>
      <h5 className="h-16">{props.content}</h5>
      <div className="flex gap-3">
        <StarIcon onClick ={() => {setYellow(!isYellow)}} className={`h-4 w-4 cursor-pointer ${isYellow ? "text-yellow-400" : ""} hover:text-yellow-400`}/>
        <PencilIcon onClick={handleEdit} className="h-4 w-4 cursor-pointer hover:text-blue-700" />
        <TrashIcon onClick={handleDelete} className="h-4 w-4 cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
};
