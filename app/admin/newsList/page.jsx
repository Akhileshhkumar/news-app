"use client";

import NewsTableItem from '@/Components/AdminComponents/newsTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [news, setNews] = useState([]);
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPin = "1234"; // Change this PIN as needed

  const fetchNews = async () => {
    const response = await axios.get('/api/news');
    setNews(response.data.news);
  };

  const deleteNews = async (mongoId) => {
    const response = await axios.delete('/api/news', {
      params: { id: mongoId },
    });
    toast.success(response.data.msg);
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect PIN. Try again!");
      setPin("");
    }
  };

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      {/* PIN LOCK POPUP */}
      {!isAuthenticated && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl'>
            <h2 className='text-xl font-bold mb-4'>Enter PIN to Access</h2>
            <input
              type='password'
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className='p-2 border rounded-md w-full text-center'
              placeholder='Enter PIN'
            />
            <button
              onClick={handleSubmit}
              className='mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              Unlock
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT (Hidden until authenticated) */}
      {isAuthenticated && (
        <>
          <h1>All News</h1>
          <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
            <table className="w-full text-sm text-gray-500">
              <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="hidden sm:block px-6 py-3">Author Name</th>
                  <th scope="col" className="px-6 py-3">News Title</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-2 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item, index) => (
                  <NewsTableItem
                    key={index}
                    mongoId={item._id}
                    title={item.title}
                    author={item.author}
                    authorImg={item.authorImg}
                    date={item.date}
                    deletenews={deleteNews}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
