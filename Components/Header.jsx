import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [email, setEmail] = useState('');
    const [currentTime, setCurrentTime] = useState(null);
    const [livenews, setLivenews] = useState([
        'Breaking: Major event happening now!',
        'Update: New policy announced by the government.',
        'Sports: Team wins the championship!',
        'Technology: New smartphone launched.',
    ]);

    useEffect(() => {
        setCurrentTime(new Date());

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        try {
            const response = await axios.post('/api/email', formData);
            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail('');
            } else {
                toast.error('Error');
            }
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <nav className='relative py-4 px-6 md:px-12 lg:px-16 shadow-md text-white text-lg'>
            {/* Video Background */}
            <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover -z-10' style={{ objectPosition: 'top' }}>
                <source src='/background-video.mp4' type='video/mp4' />
            </video>

            {/* Current Time Display */}
            <div className='flex flex-col items-center mb-2 mt-[-11px]'>
                {currentTime && (
                    <span className='text-sm font-medium text-white'>
                        {currentTime.toLocaleTimeString()} | {formatDate(currentTime)}
                    </span>
                )}
            </div>

            {/* Email Subscription Form - Now smaller and moved to the right */}
            <div className='w-full md:w-auto flex justify-end pr-6'>
                <form onSubmit={onSubmitHandler} className='flex items-center border border-blue-300 rounded-md shadow-sm bg-white px-3 py-2'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type='email'
                        placeholder='Enter your email'
                        className='pl-2 pr-1 py-1 text-xs outline-none bg-transparent text-gray-900 placeholder-gray-500 w-40'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-blue-600 text-white px-3 py-1 rounded-r-md text-xs font-semibold hover:bg-blue-700 transition-colors'
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Marquee News Scroller */}
            <div className='mt-6 bg-blue-100 py-2 px-4 rounded-md overflow-hidden'>
                <div className='whitespace-nowrap animate-marquee'>
                    {livenews.map((news, index) => (
                        <span key={index} className='mx-4 text-sm font-medium text-gray-900'>
                            {news}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;