import React ,{useState} from "react";
import { StarIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const TodoCard = (props) => {
  
  const [isYellow , setYellow] =useState(false);
  const handleEdit =() => 
  {
    props.handleEdit(props.id ,props.title , props.content);
  }
  return (
    <div className="border flex flex-col p-4 gap-3 items-center justify-center rounded-lg">
      <h3 className="border-b w-full flex justify-center">{props.title}</h3>
      <h5 className="h-16">{props.content}</h5>
      <div className="flex gap-3">
        <StarIcon onClick ={() => {setYellow(!isYellow)}} className={`h-4 w-4 cursor-pointer ${isYellow ? "text-yellow-400" : ""}`}/>
        <PencilIcon onClick={handleEdit} className="h-4 w-4 cursor-pointer" />
        <TrashIcon className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );
};
