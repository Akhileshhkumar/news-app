import React from 'react';
import Image from 'next/image';

const VideoCard = ({ image, title }) => {
    return (
        <div className="relative min-w-[250px] max-w-[250px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
            {/* Background Image */}
            <div className="relative w-full h-44">
                <Image
                    src={image || '/fallback-image.jpg'}
                    alt={title || 'Video thumbnail'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 250px"
                />
            </div>

            {/* Speech Bubbles */}
            <div className="absolute top-4 left-3 bg-white text-black text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
                सैलरी काट लो लेकिन...
            </div>
            <div className="absolute top-14 left-10 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                शट अप...
            </div>

            {/* Play Button */}
            <button 
                className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
                aria-label="Play video"
            >
                <span role="img" aria-label="Play icon">▶</span>
            </button>

            {/* Title */}
            <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2">{title || 'Untitled Video'}</h3>
            </div>
        </div>
    );
};

export default VideoCard;