import React, { useState } from 'react';
import "../styles/team.css";

interface Comment {
  id: number;
  user: string;
  content: string;
  timestamp: string;
}

const TeamPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState('');
  const [content, setContent] = useState('');

  const postComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      user,
      content,
      timestamp: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
    setUser('');
    setContent('');
  };

  return (
    <div className="team-container">
      <h1>Team Collaboration</h1>

      <form className="comment-form" onSubmit={postComment}>
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>

      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <p><strong>{comment.user}</strong></p>
            <p>{comment.content}</p>
            <span>{comment.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;