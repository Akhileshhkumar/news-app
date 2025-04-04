import React from "react";
import Link from "next/link";
import Image from "next/image";

// Format the date nicely
const formatDateTime = (dateString) => {
  if (!dateString) return "No Date Available";
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const TrendingNews = ({ sidenews = [] }) => {
  // Sort by most recent
  const sortedNews = [...sidenews].sort((a, b) => {
    const dateA = new Date(a.createdAt || a.date || 0);
    const dateB = new Date(b.createdAt || b.date || 0);
    return dateB - dateA;
  });

  return (
    <div className="space-y-3 relative left-[-13px]">
      {sortedNews.map((item) => (
        <Link key={item._id} href={`/news/${item._id}`} className="block">
          <div className="flex items-start space-x-2 p-2 w-full md:w-[320px]">
            {/* Image with blue border */}
            <div className="relative w-20 h-20 shrink-0 border-2 border-blue-500 rounded-lg p-0.5">
              <Image
                src={item.image || "/default-thumbnail.jpg"}
                alt={item.title || "News Image"}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-md"
              />
              <span className="absolute bottom-0 left-1/2 bg-white text-black text-[10px] font-medium px-1 py-0.5 rounded border border-black shadow-md translate-x-[-50%] translate-y-[50%]">
                {item.category || "General"}
              </span>
            </div>

            {/* News text */}
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                {item.title || "No Title Available"}
              </h3>
              <p className="text-[11px] text-gray-700 mt-0.5">
                {item.description
                  ? `${item.description.slice(0, 70)}...`
                  : "No description available."}
              </p>
              <span className="text-[10px] text-gray-500 mt-1 block">
                {formatDateTime(item.createdAt || item.date)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingNews;
