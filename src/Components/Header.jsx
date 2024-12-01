import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="top-0 left-0 w-full shadow-xl z-50 py-2 px-4 sm:px-8 backdrop-blur-lg bg-gradient-to-r from-green-100 to-blue-200 bg-opacity-30 dark:bg-opacity-40 rounded-md transition-all duration-200 backdrop-filter">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-[#105a63]">
<img src="/images/Code1_Logo.png" alt="Logo" className="w-16 h-18 hidden sm:block" />
            <span>CodeSphere</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
