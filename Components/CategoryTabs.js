import React from "react";

const CategoryTabs = ({ menu, setMenu, setVisibleCount }) => {
    const categories = [
        "All", "India", "Politics", "International", "Health",
        "Entertainment", "Sports", "Science", "Social", "Video", "Podcast"
    ];

    return (
        <div className="sticky top-0 z-50 bg-white text-black shadow-md mb-4">
            <div className="flex items-center justify-between p-3 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setMenu(category);
                            setVisibleCount(category === "All" ? 5 : 1000); // Show all news when not on home page
                        }}
                        className={`px-5 py-2 rounded-md transition text-sm md:text-base ${
                            menu === category
                                ? "bg-gray-200 font-semibold"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {category === "All" ? "होम पेज" : category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;
