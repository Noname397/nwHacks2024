import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";
export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className=''>
            {/* <div className='w-full h-[200px] bg-[#E7EFDE] flex flex-col items-center sm:justify-between sm:flex-row pt-6'>
                <p className='text-center'>All rights reserved.</p>
                <button onClick={redirectTo}>Get Started</button>
                <button onClick={redirectTo}>Contact Us</button>
                <button onClick={redirectTo}>Policy</button>
            </div> */}
            <div className='grid grid-cols-1 min-[640px]:grid-cols-3 gap-y-4 gap-x-4 md:gap-x-6 py-6 px-[24px] md:px-[60px]'>
                <div>
                    <h2 className='font-bold'>More about project</h2>
                    <p className='mt-5 sm:mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores in recusandae sed repudiandae rem exercitationem. Non sequi, itaque officia asperiores quia dignissimos sint voluptas mollitia reprehenderit?</p>
                    <p className='mt-2 text-end'>- ABCD, CEO</p>
                </div>
                <div>
                    <h2 className='font-bold'>Connect with us</h2>
                    <ul className='mt-5 sm:mt-10 grid gap-y-2'>
                        <li className='flex items-center'>
                        <FaFacebook size={40} color='#316FF6' />
                        <span className='ml-4'>Like us on Facebook</span>
                        </li>
                        <li className='flex items-center'>
                        <IoLogoInstagram size={40} color='#d62976' />
                        <span  className='ml-4'>Follow us on Twitter</span>
                        </li>
                        <li className='flex items-center'>
                        <TfiTwitterAlt size={40} color='#1DA1F2' />
                        <span  className='ml-4'>Follow us on Twitter</span>
                        </li>
                        <li className='flex items-center'>
                        <FaTiktok size={40} color='black' />  
                        <span  className='ml-4'>Follow us on Tiktok</span>
                        </li>
                        <li className='flex items-center'>
                        <FaPinterest size={40} color='#E60023' />
                        <span  className='ml-4'>Follow us on Pinterest</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Connect information</h2>
                    <ul className='grid gap-2'>
                    <li className='flex items-center mt-5 sm:mt-10'>
                        <div className='w-10 h-10 grid place-items-center'>
                        <FaHome className='min-w-full min-h-full' />
                        </div>
                        <p className='ml-4'>Lorem ipsum dolor , Vancouver, Canada</p>
                        </li>
                        <li className='flex items-center'>
                        <div className='w-10 h-10 grid place-items-center'>
                        <IoIosPhonePortrait className='w-full h-full' />
                        </div>
                        <p className='ml-4'>1234567890</p>
                        </li>
                        <li className='flex items-center'>
                        <div className='w-10 h-10 grid place-items-center'>
                        <CiMail className='w-full h-full' />
                        </div>
                        <p className='ml-4'>contact@email.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='grid place-items-center bg-[#5C9125] px-[24px] md:px-[60px] h-[60px] text-white'>
                <div className='flex'>
                    <FaRegCopyright size={20} color='white' />
                    <span className='ml-1 text-white'>{currentYear + ". All Rights Reversed."}</span>
                </div>
            </div>
        </footer>
    );
};

const redirectTo = () => {
    window.location.href = "/submit-form";
}
