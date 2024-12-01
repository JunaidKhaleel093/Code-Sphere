const popularPosts = [
    {
      title: "10 Must-Know JavaScript Array Methods",
      views: "2.1k",
      date: "2 days ago",
      imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which?",
      views: "1.8k",
      date: "4 days ago",
      imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400"
    },
    {
      title: "Understanding React Hooks",
      views: "1.5k",
      date: "1 week ago",
      imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400"
    },
    {
      title: "Mastering ES6 Features for Modern JavaScript",
      views: "2.5k",
      date: "3 days ago",
      imageUrl: "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_1280.jpg"
    },
    {
      title: "Responsive Web Design: Tips for 2025",
      views: "2.3k",
      date: "1 day ago",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"
    }
    
  ];
  
  export default function PopularPosts() {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Posts</h2>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }