'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-blue-100 text-black pt-8 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                {/* Logo at top-left */}
                <div className="mb-8">
                    <Image 
                        src={assets.logo} 
                        alt="DigiLok Logo" 
                        width={100} 
                        height={40} 
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Topics section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div>
                        <h3 className="font-bold mb-3">TOPICS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Politics</Link></li>
                            <li><Link href="#" className="hover:underline">Economy</Link></li>
                            <li><Link href="#" className="hover:underline">World</Link></li>
                            <li><Link href="#" className="hover:underline">Security</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">CATEGORIES</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Law</Link></li>
                            <li><Link href="#" className="hover:underline">Science</Link></li>
                            <li><Link href="#" className="hover:underline">Society</Link></li>
                            <li><Link href="#" className="hover:underline">Culture</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">VOICES</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Opinion</Link></li>
                            <li><Link href="#" className="hover:underline">Editor&apos;s Pick</Link></li>
                            <li><Link href="#" className="hover:underline">Analysis</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">IMPICATE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:underline">About Us</Link></li>
                            <li><Link href="#" className="hover:underline">Support Us</Link></li>
                            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
                        <Link href="#" className="hover:underline text-sm">Terms &amp; Conditions</Link>
                        <Link href="#" className="hover:underline text-sm">Privacy Policy</Link>
                        <Link href="#" className="hover:underline text-sm">Newsletter</Link>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                            <Image src={assets.instagram_icon} alt="Instagram" width={24} height={24} />
                        </Link>
                        <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition">
                            <Image src={assets.facebook_icon} alt="Facebook" width={24} height={24} />
                        </Link>
                        <Link href="#" aria-label="Twitter" className="hover:opacity-80 transition">
                            <Image src={assets.twitter_icon} alt="Twitter" width={24} height={24} />
                        </Link>
                        <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition">
                            <Image src={assets.youtube_icon} alt="YouTube" width={24} height={24} />
                        </Link>
                    </div>
                </div>

                <div className="text-center mt-4 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} DigiLok. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;