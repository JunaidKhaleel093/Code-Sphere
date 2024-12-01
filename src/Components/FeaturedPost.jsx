import { Link } from 'react-router-dom';

export default function FeaturedPost() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Featured post background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <span className="inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold mb-4">
          Featured
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Insights on Web Development, Tools, and Trends
        </h2>
        <p className="text-xl text-gray-300 mb-6 max-w-2xl">
        Stay updated with the latest in tech, coding tips, and development insights.
        </p>
        <Link
          to="/full-article"
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Read Full Article
        </Link>
      </div>
    </div>
  );
}