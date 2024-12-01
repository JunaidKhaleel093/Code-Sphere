const categories = [
  { name: "React", count: 18, color: "bg-blue-100 text-blue-800" },
  { name: "JavaScript", count: 13, color: "bg-yellow-100 text-yellow-800" },
  { name: "CSS", count: 9, color: "bg-pink-100 text-pink-800" },
  { name: "Web Performance", count: 8, color: "bg-green-100 text-green-800" },
  { name: "DevOps", count: 12, color: "bg-purple-100 text-purple-800" },
  { name: "Cloud Computing", count: 18, color: "bg-blue-100 text-blue-800" },
  { name: "Machine Learning", count: 22, color: "bg-green-100 text-green-800" },
  { name: "Cybersecurity", count: 15, color: "bg-red-100 text-red-800" },
];

export default function Categories() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${category.color} hover:opacity-90 transition-opacity`}
          >
            <span className="font-medium">{category.name}</span>
            <span className="bg-white bg-opacity-50 px-2 py-1 rounded-full text-sm">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
