import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsItem = ({ title, category, image, id, date, description }) => {
  return (
    <div className="text-center">
      {/* Image with animated border and padding */}
      <div className="relative group p-[5px] border-2 border-blue-400 rounded-lg transition-all duration-500 group-hover:border-blue-600 w-[250px] mx-auto">
        <Link href={`/news/${id}`} className="block">
          <Image 
            src={image || "/default-thumbnail.jpg"} 
            alt={title || "No Title"} 
            width={250} 
            height={150} 
            className="w-full h-[150px] object-cover rounded-lg"
          />
        </Link>

        {/* Category Badge */}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-md shadow">
          {category || "Uncategorized"}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3 px-3 w-[250px] mx-auto">
        <h5 className="text-sm font-bold hover:underline">
          <Link href={`/news/${id}`}>
            {title || "No Title Available"}
          </Link>
        </h5>
        <p className="text-xs text-gray-600 mt-1">
          {description ? `${description.slice(0, 80)}...` : "No description available."}
        </p>
        <p className="text-gray-500 text-xs mt-2">{date || "No Date"}</p>
      </div>
    </div>
  );
};

export default NewsItem;
