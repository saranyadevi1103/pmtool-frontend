import React from "react";

type CommentBubbleProps = {
  user: string;
  text: string;
};

const CommentBubble = ({ user, text }: CommentBubbleProps) => {
  return (
    <div className="bg-[#fdf4ff] p-3 rounded-lg shadow text-sm text-[#1f2937]">
      <strong>{user}:</strong> {text}
    </div>
  );
};

export default CommentBubble;