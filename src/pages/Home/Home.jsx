import React from 'react';
import homepage from "../../assets/Images/homepage.jpg";
import { Link } from 'react-router-dom';
import Content from '../Content';

export default function Home() {
  return (
    <>
    <div className="flex flex-row gap-4 my-40 justify-center items-center mr-5.5 ml-5.5" >
        <div className='shadow-2xl'>
            <img className='rounded-2xl' src={homepage} alt="" />
        </div>
        <div className=''>
            <h1 className='font-mono font-bold text-shadow-amber-100'>Welcome to JsCompiler</h1>
            <p>
                JsCompiler is a powerful online JavaScript compiler that allows you to write, run, and share JavaScript code directly in your browser.
            </p>
            <div className='flex flex-row gap-7 ml-10'>
                
                <button className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2 shadow-md transition-all duration-300'>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    Try now
                </button>
                <button className='flex items-center gap-2  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2 shadow-md transition-all duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    Examples
                </button>


                {/* <Link to="/" className='btn btn-primary'><i class="bi bi-lightning-charge"></i>Try Now</Link> */}
                {/* <Link to="/examples" className='btn btn-secondary'><i class="bi bi-book"></i> View Examples</Link> */}
            </div>
        </div>
        
    </div>
    <Content/>
    </>
  )
}




