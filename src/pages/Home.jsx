import BlogPost from '../Components/BlogPost';
import FeaturedPost from '../Components/FeaturedPost';
import Categories from '../Components/Categories';
import Newsletter from '../Components/Newsletter';
import PopularPosts from '../Components/PopularPosts';

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    date: "January 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Discover how to create beautiful designs with Tailwind CSS utility classes.",
    date: "February 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800"
  },
  {
    id: 3,
    title: "Web Development Best Practices",
    excerpt: "Essential tips and tricks for modern web development.",
    date: "February 26, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
  },
  {
    id: 4,
    title: "Exploring React 18 Features",
    excerpt: "Dive into React 18's exciting updates like Concurrent Rendering and Automatic Batching.",
    date: "March 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1592609931041-40265b692757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
  },
  {
    id: 5,
    title: "Next.js 14: What's New?",
    date: "March 13, 2024",
    excerpt: "Discover the latest enhancements in Next.js 14 for server-side rendering and performance.",
    imageUrl: "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  }
];

export default function Home() {
  return (
    <div>
      <FeaturedPost />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
          </div>
          <aside className="space-y-8">
            <Categories />
            <PopularPosts />
          </aside>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}