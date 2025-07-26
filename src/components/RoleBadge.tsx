import React from "react";

type RoleBadgeProps = {
  role: string;
};

const RoleBadge = ({ role }: RoleBadgeProps) => {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-[#fdffb6] text-[#0f172a] text-xs font-medium shadow">
      {role}
    </span>
  );
};

export default RoleBadge;