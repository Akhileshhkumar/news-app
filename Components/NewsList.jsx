import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import CategoryTabs from "./CategoryTabs";
import Featurednews from "./FeaturedNews";
import Trendingnews from "./TrendingNews";
import Morenews from "./MoreNews";
import PointsTable from "./PointsTable";
import OtherNews from "./OtherNews";

const NewsList = () => {
  const [menu, setMenu] = useState("All");
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [visibleCounts, setVisibleCounts] = useState({
    Sports: 6,
    Politics: 5,
    International: 5,
    India: 5,
    Entertainment: 5,
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news");
        const sortedNews = (response.data.news || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNews(sortedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const sortByDate = (newsArray) => {
    return [...newsArray].sort(
      (a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date)
    );
  };

  const filteredNews = sortByDate(
    news.filter((item) =>
      menu === "All" ? item.category !== "Video" : item.category === menu
    )
  );

  const topNews = filteredNews.slice(0, 5);
  const featuredNews = topNews[0] || {};
  const sideNews = topNews.slice(1, 5);
  const remainingNews = filteredNews.slice(5, visibleCount);

  const handleViewMore = (category) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [category]: prev[category] + 6,
    }));
  };

  const getLogoSection = (category) => {
    const logoConfig = {
      Sports: {
        src: "/Sports.png",
        alt: "Sports Logo",
        width: 128,
        height: 40,
        borderColor: "border-pink-600",
      },
      Politics: {
        src: "/Politics.png",
        alt: "Politics Logo",
        width: 192,
        height: 40,
        borderColor: "border-red-500",
      },
      International: {
        src: "/world.png",
        alt: "World Logo",
        width: 192,
        height: 40,
        borderColor: "border-green-700",
      },
      India: {
        src: "/Desh.png",
        alt: "India Logo",
        width: 112,
        height: 40,
        borderColor: "border-yellow-600",
      },
      Entertainment: {
        src: "/Entertainment.png",
        alt: "Entertainment Logo",
        width: 192,
        height: 40,
        borderColor: "border-blue-700",
      },
    };

    const config = logoConfig[category];
    if (!config) return null;

    return (
      <div className="flex items-center justify-center mb-4 relative">
        <div className={`flex-1 border-t-2 ${config.borderColor}`}></div>
        <div className="relative w-32 h-10 mx-2">
          <Image
            src={config.src}
            alt={config.alt}
            width={config.width}
            height={config.height}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className={`flex-1 border-t-2 ${config.borderColor}`}></div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto my-8 px-4 md:px-6 lg:px-8">
      <CategoryTabs
        menu={menu}
        setMenu={(newMenu) => {
          setMenu(newMenu);
          setVisibleCount(5);
        }}
        setVisibleCount={setVisibleCount}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-4 mb-8 pb-4">
        <Featurednews featurednews={featuredNews} />
        <Trendingnews sidenews={sideNews} />
      </div>

      <Morenews
        visiblenews={remainingNews}
        visibleCount={visibleCount}
        totalnews={filteredNews.length}
        handleViewMore={() => setVisibleCount((prev) => prev + 5)}
      />

      {/* SPORTS SECTION */}
      <div className="mt-8">
        {getLogoSection("Sports")}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {sortByDate(news.filter((item) => item.category === "Sports"))
              .slice(0, visibleCounts["Sports"])
              .map((newsItem, index) => (
                <Morenews
                  key={newsItem.id || index}
                  visiblenews={[newsItem]}
                  visibleCount={1}
                />
              ))}
          </div>
          <div>
            <PointsTable />
          </div>
        </div>
        {news.filter((item) => item.category === "Sports").length >
          visibleCounts["Sports"] && (
          <button
            onClick={() => handleViewMore("Sports")}
            className="mt-6 text-blue-500 hover:text-blue-700 font-semibold"
          >
            View More
          </button>
        )}
      </div>

      {/* OTHER CATEGORIES */}
      {Object.keys(visibleCounts)
        .filter((category) => category !== "Sports")
        .map((category) => {
          const categoryNews = sortByDate(
            news.filter((item) => item.category === category)
          );

          return (
            <div key={category} className="mt-8 pl-4">
              {getLogoSection(category)}
              {category === "Politics" ? (
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                  <OtherNews
                    otherNews={sortByDate(
                      news.filter((item) => item.category !== "Video")
                    ).slice(0, 7)}
                  />
                  <Morenews
                    visiblenews={categoryNews.slice(0, visibleCounts[category])}
                    visibleCount={visibleCounts[category]}
                    totalnews={categoryNews.length}
                    handleViewMore={() => handleViewMore(category)}
                    customGrid="grid-cols-1 md:grid-cols-3"
                  />
                </div>
              ) : (
                <Morenews
                  visiblenews={categoryNews.slice(0, visibleCounts[category])}
                  visibleCount={visibleCounts[category]}
                  totalnews={categoryNews.length}
                  handleViewMore={() => handleViewMore(category)}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default NewsList;
