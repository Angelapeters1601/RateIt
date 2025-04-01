import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

function About() {
  return (
    <div className="bg-stone-100 max-w-4xl font-serif tracking-wide mx-auto py-5 px-6 text-gray-800 grid gap-8">
      <h1 className="text-lg uppercase font-bold text-center text-gray-900">
        About <span className="text-primary">Rate-It</span>
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold font-serif mb-4 underline underline-offset-2
        lg:text-center
         ">
          Bringing Expert Reviews to Beauty Enthusiasts
        </p>
        <p className="text-sm">
          Rate-It is a meticulously designed platform that empowers users to make confident beauty purchases. Inspired by <span className="font-semibold">Good Housekeeping</span> and <span className="font-semibold">Wirecutter</span>, it provides expert-driven, data-backed insights into skincare, haircare, and makeup products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 underline underline-offset-2">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Curated Product Listings – Categorized for seamless navigation
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Expert Ratings – Research-backed, unbiased reviews
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Dynamic Search & Filtering – Efficient product discovery
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Responsive UI – Optimized for mobile and desktop
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Scalability – Clean, modular architecture for future growth
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 underline underline-offset-2">Tech Stack & Methodology</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> React & React Router – For a dynamic, single-page experience
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Tailwind CSS – Modern, responsive, and highly customizable styling
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> Axios & External APIs – Efficient data retrieval for real-time updates
            </li>
            <li className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="text-primary" /> State Management – Structured approach for performance optimization
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg lg:text-center font-semibold text-gray-900 mb-4 underline underline-offset-2">Why Rate-It Matters</h2>
        <p className="text-sm">
          Rate-It was approached as a real-world project, applying industry best practices for performance, accessibility, and user engagement. Every design and development decision was user-focused, ensuring a smooth and professional experience.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg lg:text-center font-semibold text-gray-900 mb-4 underline underline-offset-2">Explore the Project</h2>
        <p className="mb-4 text-sm lg:text-center ">View the full source code on GitHub:</p>
        <a
          href="https://github.com/Angelapeters1601"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm italic font-semibold flex items-center gap-2 lg:justify-center hover:underline"
        >
          View the Repository <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default About;