import React from "react";
import { StarIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const TodoCard = (props) => {
  return (
    <div className="border flex flex-col p-4 gap-3 items-center justify-center">
      <h3>{props.title}</h3>
      <h5>{props.content}</h5>
      <div className="flex gap-3">
        <StarIcon className="h-4 w-4" />
        <PencilIcon className="h-4 w-4" />
        <TrashIcon className="h-4 w-4" />
      </div>
    </div>
  );
};
