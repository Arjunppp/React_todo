import React from "react";
import {
  Bars3Icon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <div className="h-full bg-slate-200 flex justify-between items-center px-6 border-y border-slate-50">
      <div className="flex gap-3 ">
        <Bars3Icon className="h-6 w-6 text-gray-700 cursor-pointer"  />
        <h3>TO DO</h3>
      </div>
      <div className="flex gap-3 ">
        <QuestionMarkCircleIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
        <Cog6ToothIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
        <EllipsisVerticalIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};
