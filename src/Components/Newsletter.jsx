import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-teal-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to CodeSphere.
          </h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and updates delivered straight
            to your inbox. No spam, unsubscribe at any time.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <section className="pt-4 pb-0">
            <h2 className="name-heading font-bold text-3xl">
              Mohammed Junaid Ismail.
            </h2>
          </section>

          <div className="mt-3 mb-3 flex justify-center space-x-6">
            <a
              href="https://github.com/JunaidKhaleel093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-400 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/JunaidKhaleel96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-400 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/junaidkhaleel093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-400 transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/mohammed_junaid_khaleel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-teal-400 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="copyright mb-0 text-indigo-200">
            Copyrights &copy; Junaid Khaleel - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
