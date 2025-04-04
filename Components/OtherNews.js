import React from "react";
import Link from "next/link";

const OtherNews = ({ otherNews = [] }) => {
  // Sort the news by most recent date
  const sortedNews = [...otherNews].sort((a, b) => {
    const dateA = new Date(a.createdAt || a.date || 0);
    const dateB = new Date(b.createdAt || b.date || 0);
    return dateB - dateA;
  });

  return (
    <div className="relative max-w-md p-6 pt-20 bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl border border-gray-200 rounded-3xl overflow-hidden">
      {/* Header Badge - Moved down by changing top and translate-y values */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 translate-y-0">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-2 rounded-full font-semibold text-lg shadow-xl">
          अन्य खबरें
        </div>
      </div>

      {/* News List */}
      <ul className="space-y-4 text-gray-800">
        {sortedNews.map((item, index) => (
          <li
            key={item._id || index}
            className="flex items-start border-b border-gray-300 pb-3 last:border-none group"
          >
            <span className="font-bold text-orange-500 text-lg mr-3">{index + 1}.</span>
            <Link href={`/news/${item._id || "#"}`}>
              <span className="cursor-pointer text-gray-700 group-hover:text-orange-600 group-hover:scale-105 transition duration-300 ease-in-out">
                {item.title || "No Title"}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Stylish Bottom Glow Effect */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-yellow-300 blur-lg opacity-50"></div>
    </div>
  );
};

export default OtherNews;