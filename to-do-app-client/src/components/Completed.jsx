import React, { useEffect, useState } from "react";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const completedUrl = `${serverUrl}/completed`;
    const fetchCompleted = async () => {
      try {
        const response = await axios.get(completedUrl);
        setCompletedTask(response.data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };
    fetchCompleted();
  }, [serverUrl]);

  return (
    <div className="flex flex-col gap-3">
      {completedTask.length > 0 ? (
        completedTask.map((each) => (
          <h3 key={each._id} className="w-full p-3 rounded-lg border border-white line-through decoration-red-400 bg-slate-200">
            {each.content}
          </h3>
        ))
      ) : (
        <p>No completed tasks available.</p>
      )}
    </div>
  );
};
