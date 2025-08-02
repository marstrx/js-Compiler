import React from 'react';
import homepage from "../../assets/Images/homepage.jpg";
import './Home.css';
import { Link } from 'react-router-dom';
import Content from '../Content';

export default function Home() {
  return (
    <>
    <div className="home">
        <div className='homeLeftSide'>
            <img src={homepage} alt="" />
        </div>
        <div className='homeRightSide'>
            <h1>Welcome to JsCompiler</h1>
            <p>
                JsCompiler is a powerful online JavaScript compiler that allows you to write, run, and share JavaScript code directly in your browser.
            </p>
            <div className='homeBtns'>
                <Link to="/" className='btn btn-primary'><i class="bi bi-lightning-charge"></i>Try Now</Link>
                <Link to="/examples" className='btn btn-secondary'><i class="bi bi-book"></i> View Examples</Link>
            </div>
        </div>
        
    </div>
    <Content/>
    </>
  )
}
