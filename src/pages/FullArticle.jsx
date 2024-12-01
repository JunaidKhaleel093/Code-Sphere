import { Link } from "react-router-dom";

export default function FullArticle() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-5xl font-bold mb-6">
      Shaping the Future of Web Development: Trends and Innovations for 2024 and 2025<br/> And Beyond
      </h1>
      <p className="text-xl mb-6">
        Explore the emerging trends and technologies that will shape the future
        of web development, from AI-powered tools to WebAssembly innovations.
      </p>
      {/* Full article content */}
      <div className="text-gray-700">
        <p></p>
      </div>

      {/* Related posts In future */}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
        <div className="space-y-6">

          {/* Junaid Article */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <img
              src="https://pbs.twimg.com/profile_banners/738067926146818048/1727793335/1500x500"
              alt="The Rise of WebAssembly"
              className="w-full h-58 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Mohammed Junaid lsmail</h3>
            <p className="text-gray-600 mt-2"><b>Smashing Through Boundaries</b>: My Badminton Journey</p>
            <Link
              to="/article-2"
              className="text-teal-600 hover:text-teal-800 mt-4 block"
            >
              Read Full Article
            </Link>
          </div>

          {/* AI in Web Development Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI in Web Development"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              AI in Web Development
            </h3>
            <p className="text-gray-600 mt-2">
              Explore how artificial intelligence is transforming the way we
              develop websites and applications...
            </p>
          </div>

          {/* The Rise of WebAssembly Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/16023919/pexels-photo-16023919/free-photo-of-photo-of-a-html-code.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="The Rise of WebAssembly"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              The Rise of Web-Technologies 
            </h3>
            <p className="text-gray-600 mt-2">
            Rapid evolution of web development tools and technologies that are reshaping how applications are built and run in browsers....
            </p>
          </div>

          {/* Next-Gen Frontend Frameworks Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Next-Gen Frontend Frameworks"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Next-Gen Frontend Frameworks
            </h3>
            <p className="text-gray-600 mt-2">
              Discover the frontend frameworks that are driving the future of
              web development, including React, Vue.js, and more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
