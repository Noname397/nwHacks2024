
import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className='w-full h-[200px] bg-[#E7EFDE] flex justify-between'>
                <div className='flex justify-center items-center ml-5'>
                    <p>All rights reserved.</p>
                </div>
                <div className='flex gap-5 mr-5'>
                    <button onClick={redirectTo}>Get Started</button>
                    <button onClick={redirectTo}>Contact Us</button>
                    <button onClick={redirectTo}>Policy</button>
                </div>
            </div>
        </footer>
    );
};

const redirectTo = () => {
    window.location.href = "/submit-form";
}
