import React from "react";
import NewsItem from "./NewsItem";

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

const MoreNews = ({
  visiblenews = [],
  visibleCount,
  totalnews = 0,
  handleViewMore,
  customGrid,
}) => {
  // Sort news by latest first
  const sortedNews = [...visiblenews].sort((a, b) => {
    const dateA = new Date(a.createdAt || a.date || 0);
    const dateB = new Date(b.createdAt || b.date || 0);
    return dateB - dateA; // Latest first
  });

  return (
    <div>
      <div
        className={`grid gap-6 ${
          customGrid || "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        }`}
      >
        {sortedNews.map((item) => {
          const displayDate = item.createdAt || item.date || null;

          return (
            <NewsItem
              key={item._id}
              id={item._id}
              image={item.image || "/default-thumbnail.jpg"}
              title={item.title || "No Title Available"}
              description={item.description || "No Description Available"}
              category={item.category || "Uncategorized"}
              date={formatDateTime(displayDate)}
            />
          );
        })}
      </div>

      {visibleCount < totalnews && (
        <div className="text-center mt-[-10px]">
          <button
            onClick={handleViewMore}
            className="bg-blue-600 text-white py-2 px-8 text-sm md:text-base rounded-full hover:bg-blue-700 transition font-semibold"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreNews;
