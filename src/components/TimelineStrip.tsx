import React from "react";

type TimelineStripProps = {
  label: string;
  progressPercent: number;
};

const TimelineStrip = ({ label, progressPercent }: TimelineStripProps) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#ffc6ff] rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default TimelineStrip;