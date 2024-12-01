import { useState } from 'react';

export default function Comments({ postId }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Saturo Gojo",
      avatar: "https://tse3.mm.bing.net/th?id=OIP.z2bZab_PQJB5cdmgyYLZ4QHaHa&pid=Api&P=0&h=180",
      content: "Excellent👌 Creative work 😁",
      date: "2 hours ago",
      likes: 10
    },
    {
      id: 2,
      author: "Ryomen Sukuna",
      avatar: "https://sp.yimg.com/ib/th?id=OIP.H4y8jxseehg-kVsBljLVXAHaF0&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      content: "Great insights! Would love to see more content like this.",
      date: "5 hours ago",
      likes: 3
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      author: "New User",
      avatar: "https://tse3.mm.bing.net/th?id=OIP.ht1cgorAk5N_aSCpI-NA9AHaHa&pid=Api&P=0&h=180",
      content: newComment,
      date: "Just now",
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments ({comments.length})</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none h-24"
          required
        />
        <button
          type="submit"
          className="mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-900 transition-colors"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-teal-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {comment.likes}
                </button>
                <button className="hover:text-teal-600">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}