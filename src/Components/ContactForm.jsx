import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Replace this with the updated handleFormSubmit function
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      setIsSubmitting(false);
      return;
    }

    const API_URL = "https://formspree.io/f/xwpkblld"; // Always use Formspree URL

    console.log("Submitting to:", API_URL); // Debug URL
    console.log("Form Data:", formData);   // Debug Data

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error submitting the form.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setError("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {isSubmitted && (
            <div className="mt-4 text-green-600 font-semibold">
              Your message has been sent successfully!
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-600 font-semibold">{error}</div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li className="text-gray-700 flex items-center">
              <i className="fas fa-location-pin mr-2"></i>
              <strong>Location: </strong>
              <span className="ml-2">Bengaluru, 560032, Karnataka, India</span>
            </li>
            <li className="text-gray-700 flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              <strong>Email: </strong>
              <span className="ml-2">junaidismail.07093@gmail.com</span>
            </li>
            <li className="text-gray-700 flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              <strong>Phone:</strong>
              <span className="ml-2">+91 8217009727</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
