import { useState } from "react";
import Comments from "./Comments";

export default function BlogPost({ title, excerpt, date, imageUrl, id }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <time className="text-sm text-gray-500">{date}</time>
        <h2 className="mt-2 text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-600">{excerpt}</p>
        <button
          className="mt-4 text-teal-500 hover:text-teal-800"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "← Close" : "Read more →"}
        </button>

        {isExpanded && (
          <div className="mt-6">
            <div className="prose max-w-none">
              <p>
                <strong>Frontend Development (Client-Side):</strong>
                <br />
                Frontend development is everything that users interact with on a
                website or web application. It involves creating the visual
                components, layouts, and interactive features that make a site
                user-friendly. Frontend developers use languages like HTML, CSS,
                and JavaScript, as well as frameworks like React, Vue.js, and
                Angular to build the client-side interface. Their goal is to
                ensure that the website looks great, functions smoothly, and
                provides a seamless user experience.
              </p>
              <p>
                <strong>Backend Development (Server-Side):</strong>
                <br />
                Backend development focuses on the server-side of web
                development, dealing with the data, databases, and logic that
                power the frontend of a website. It involves creating and
                managing servers, databases, and APIs (Application Programming
                Interfaces). Backend developers use programming languages like
                Node.js, Python, Ruby, PHP, Java, and frameworks such as
                Express.js, Django, or Spring to handle the server-side logic,
                authentication, and database interactions.
              </p>
            </div>
            <Comments postId={id} />
          </div>
        )}
      </div>
    </article>
  );
}
