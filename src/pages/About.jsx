import ContactForm from "../Components/ContactForm";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About CodeSphere</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-4">
            Welcome to CodeSphere, a platform dedicated to sharing knowledge and insights about web development,
            programming, and technology. Our mission is to make complex technical concepts accessible to everyone.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're a beginner just starting your journey in tech or an experienced developer looking to
            stay up-to-date with the latest trends, we've got something for you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Quality content that matters</li>
            <li>Clear and concise explanations</li>
            <li>Practical examples and tutorials</li>
            <li>Community-driven learning</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have any questions or feedback? We'd love to hear from you! Whether you need help with a technical issue,
            want to collaborate, or just want to say hello, feel free to reach out.
          </p>
          <p className="text-gray-600 mb-4">
            You can contact us via email at{' '}
            <a href="mailto:junaidismail.07093@gmail.com" className="text-blue-500 hover:underline">
              junaidismail.07093@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            We look forward to hearing from you and will get back to you as soon as possible!
          </p>
        </div>

        {/* Add Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
