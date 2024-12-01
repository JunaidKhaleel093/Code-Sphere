import { useState } from "react";
import BlogPost from "../Components/BlogPost";

const allPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    date: "March 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    category: "React",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover how to create beautiful designs with Tailwind CSS utility classes.",
    date: "March 14, 2024",
    imageUrl:
      "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CSS",
  },
  {
    id: 3,
    title: "Advanced JavaScript Patterns",
    excerpt: "Deep dive into advanced JavaScript patterns and best practices.",
    date: "March 13, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Understanding MongoDB's NoSQL Structure",
    excerpt:
      "A deeper dive into MongoDB's NoSQL database model, its document-based storage system, and the differences between relational and non-relational databases.",
    date: "March 10, 2024",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.uLzcjmx5pfw3sR9j_xAYXQHaDw&pid=Api&P=0&h=180",
    category: "Database",
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    excerpt:
      "Essential techniques to improve your website's performance and user experience.",
    date: "March 11, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    category: "Performance",
  },
  {
    id: 6,
    title: "Modern State Management in React",
    excerpt:
      "Compare different state management solutions in React applications.",
    date: "March 10, 2024",
    imageUrl:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batinic-2573434-4164418.jpg&fm=jpg&_gl=1*17wlnjc*_ga*NzE2NjUzMDg4LjE3MTU2MjMxNjU.*_ga_8JE65Q40S6*MTczMTMyMjcwNy45LjEuMTczMTMyMzMxMi4wLjAuMA..",
    category: "React",
  },
  {
    id: 7,
    title: "Node.js Performance Optimization",
    excerpt:
      "Explore ways to optimize the performance of Node.js applications, from handling large-scale data to efficient request processing..",
    date: "March 10, 2024",
    imageUrl:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Backend",
  },
  {
    id: 8,
    title: "Working with APIs in Web Development",
    excerpt:
      "A post on how APIs (Application Programming Interfaces) work and how developers can integrate them into their web applications..",
    date: "March 10, 2024",
    imageUrl:
      "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Backend",
  },
  {
    id: 9,
    title: "Web Development Trends to Watch in 2025",
    excerpt:
      "A forward-looking article about the latest trends and technologies in web development.",
    date: "March 10, 2024",
    imageUrl:
      "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-software-source-code-program-code-code-on-a-computer-screen-the-developer-is-working-on-program-codes-in-the-office-photo-with-source-code.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Backend",
  },
];

const categories = [
  "All",
  "React",
  "JavaScript",
  "CSS",
  "Database",
  "Performance",
  "Backend",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Explore our latest articles and tutorials
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No posts found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
