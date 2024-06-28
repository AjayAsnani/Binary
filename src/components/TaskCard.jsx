// TaskCard.jsx
import React from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const TaskCard = ({ task }) => {
  return (
    <div
      key={task.id}
      className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={task.image}
        alt={task.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{task.name}</h3>
        <p
          className={`mt-2 ${
            task.completed ? "text-green-600" : "text-red-600"
          }`}
        >
          Impact: {task.impact}
        </p>
        <div className="mt-4 flex items-center">
          {task.completed ? (
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          ) : (
            <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
          )}
          <span className="ml-2">
            {task.completed ? "Completed" : "Incomplete"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
