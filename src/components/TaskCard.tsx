import React from "react";

type TaskCardProps = {
  title: string;
  assignedTo: string;
  priority: "High" | "Medium" | "Low";
  status: string;
};

const priorityColors = {
  High: "bg-[#ffb3c6]",
  Medium: "bg-[#fdffb6]",
  Low: "bg-[#caffbf]",
};

const TaskCard = ({ title, assignedTo, priority, status }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
      <div>
        <h4 className="text-sm font-semibold text-[#0f172a]">{title}</h4>
        <p className="text-xs text-gray-500">
          Priority: {priority} • Assigned to {assignedTo}
        </p>
      </div>
      <span className={`px-2 py-1 rounded text-xs ${priorityColors[priority]}`}>
        {status}
      </span>
    </div>
  );
};

export default TaskCard;