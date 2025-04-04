'use client';
import Header from '@/Components/Header'; // ✅ Imported Header component
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';

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

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const fetchNewsData = useCallback(async () => {
    try {
      const response = await axios.get('/api/news', {
        params: { id: params.id }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }, [params.id]);

  const fetchMoreNews = useCallback(async () => {
    try {
      const response = await axios.get('/api/news');
      const filtered = (response.data.news || [])
        .filter(item => item._id !== params.id)
        .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
      setAllNews(filtered);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchNewsData();
    fetchMoreNews();
    setVisibleCount(5); // reset count on ID change
  }, [params.id, fetchNewsData, fetchMoreNews]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleNews = allNews.slice(0, visibleCount);

  if (!data) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <>
      {/* ✅ Header Component */}
      <Header />

      {/* News Title Section */}
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='text-center my-20'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <p className='mt-4 text-lg text-gray-700'>{data.author}</p>
        </div>
      </div>

      {/* Main News Content */}
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-80px] mb-10'>
        <Image
          className='border-4 border-white rounded-md'
          src={data.image}
          width={800}
          height={480}
          alt={data.title || 'Main news image'}
          priority
        />
        <div className='news-content mt-6' dangerouslySetInnerHTML={{ __html: data.description }} />

        {data.subheadings?.length > 0 && data.subheadings.map((sub, i) => (
          <div key={i} className='mt-10'>
            <h2 className='text-2xl font-semibold mb-3'>{sub.heading}</h2>
            {sub.image && (
              <Image
                className='border-4 border-white my-4 rounded-md'
                src={sub.image}
                width={800}
                height={480}
                alt={sub.heading || `Subheading ${i + 1}`}
              />
            )}
            <div className='news-content' dangerouslySetInnerHTML={{ __html: sub.subdescription }} />
          </div>
        ))}
      </div>

      {/* More News Section */}
      <div className='bg-gray-100 py-10 px-5 md:px-12 lg:px-28'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>More News</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {visibleNews.map((item) => (
            <Link
              key={item._id}
              href={`/news/${item._id}`}
              className='block bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition'
            >
              <Image
                src={item.image || '/default-thumbnail.jpg'}
                width={400}
                height={250}
                alt={item.title || 'News thumbnail'}
                className='w-full h-48 object-cover rounded-md'
                placeholder='blur'
                blurDataURL='/placeholder-image.jpg'
              />
              <h3 className='text-lg font-semibold mt-3 line-clamp-2'>{item.title}</h3>
              <p className='text-sm text-gray-600 mt-1 line-clamp-2'>{item.description?.slice(0, 100)}...</p>
              <p className='text-xs text-gray-400 mt-1'>{formatDateTime(item.createdAt || item.date)}</p>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < allNews.length && (
          <div className='text-center mt-8'>
            <button
              onClick={handleShowMore}
              className='bg-blue-600 text-white py-2 px-8 rounded-full text-sm md:text-base font-semibold hover:bg-blue-700 transition'
              aria-label='Load more news articles'
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Page;
