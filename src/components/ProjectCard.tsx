import React from "react";

type ProjectCardProps = {
  name: string;
  deadline: string;
  progress: number; // 0–100
};

const ProjectCard = ({ name, deadline, progress }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition duration-200">
      <h3 className="text-lg font-semibold text-[#0f172a]">{name}</h3>
      <p className="text-sm text-gray-500">Deadline: {deadline}</p>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#a0c4ff] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-500">Progress: {progress}%</p>
    </div>
  );
};

export default ProjectCard;