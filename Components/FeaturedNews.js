import React from "react";
import Link from "next/link";
import Image from "next/image";

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

const FeaturedNews = ({ featurednews = {} }) => {
  const displayDate =
    featurednews.createdAt || featurednews.date || null;

  return (
    <div className="md:col-span-3 relative bg-white rounded-xl shadow-lg overflow-hidden group">
      <Link href={`/news/${featurednews._id}`} className="block">
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={featurednews.image || "/default-thumbnail.jpg"}
            alt={featurednews.title || "No Title"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-6 w-full transition-opacity duration-300 ease-in-out group-hover:bg-opacity-90">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
            {featurednews.category || "Uncategorized"}
          </span>

          <h2 className="text-2xl font-bold mt-2">
            {featurednews.title || "No Title Available"}
          </h2>

          {featurednews.subheading && (
            <h3 className="text-lg mt-2">{featurednews.subheading}</h3>
          )}

          {displayDate && (
            <p className="text-sm mt-2 text-gray-300">
              🕒 {formatDateTime(displayDate)}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default FeaturedNews;
