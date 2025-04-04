'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const NewsTableItem = ({ authorImg, title, author, date, deleteNews, mongoId }) => {
    const formattedDate = date ? new Date(date).toDateString() : 'No date available';
    
    return (
        <tr className='bg-white border-b hover:bg-gray-50 transition-colors'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image 
                    width={40} 
                    height={40} 
                    src={authorImg || assets.profile_icon} 
                    alt={author ? `${author}'s profile picture` : 'Default profile picture'}
                    className='rounded-full object-cover'
                />
                <p>{author || "No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title || "No title"}
            </td>
            <td className='px-6 py-4'>
                {formattedDate}
            </td>
            <td 
                onClick={() => deleteNews(mongoId)} 
                className='px-6 py-4 cursor-pointer text-red-500 hover:text-red-700 transition-colors'
            >
                ×
            </td>
        </tr>
    );
};

export default NewsTableItem;
