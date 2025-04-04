"use client";

import SubsTableItem from '@/Components/AdminComponents/SubsTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [emails, setEmails] = useState([]);
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPin = "1234"; // Change this PIN as needed

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
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
          <h1>All Subscription</h1>
          <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
            <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-3'>Email Subscription</th>
                  <th scope='col' className='hidden sm:block px-6 py-3'>Date</th>
                  <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((item, index) => (
                  <SubsTableItem
                    key={index}
                    mongoId={item._id}
                    deleteEmail={deleteEmail}
                    email={item.email}
                    date={item.date}
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
