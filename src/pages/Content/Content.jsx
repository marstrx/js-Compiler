import React, { useState } from 'react';
import './Content.css';
import Css from '../FilesType/Css/Css';
import Script from '../FilesType/Script/Script';
import Html from '../FilesType/Html/Html';
import Output from '../Output/Output';
import ActionsBtn from '../ActionsBtn/ActionsBtn';

function Content({ scrollRef }) {
    const [showHtml, setShowHtml] = useState(true);
    const [showCSs , setShowCss] = useState(false);
    const [showJs ,setShowJs] = useState(false);

    
   

    // handle show html
    const handleShowHtml = () => {
        setShowHtml(true);
        setShowCss(false);
        setShowJs(false);
    };
    // handle show css
    const handleShowCSs =()=>{
        setShowCss(true);
        setShowHtml(false);
        setShowJs(false);
    }
    // handle show js
    const handleShowJs =()=>{
        setShowJs(true);
        setShowCss(false);
        setShowHtml(false);
    }
   
  return (
    
    <div ref={scrollRef} className='mr-5.5 ml-5.5 font-mono'>
        <div className=''>
            <div className="flex gap-2 items-center font-bold">
                <div><i class="bi bi-code-slash fs-2 "></i></div>
                <div><label htmlFor="inputText">Write your code here</label></div>
            </div>
            <div className='flex gap-2 w-full my-3'>
                <button className='flex-1 bg-orange-600 text-white py-2 rounded font-mono' onClick={handleShowHtml}>index.html</button>
                <button className='flex-1 bg-blue-600 text-white py-2 rounded font-mono' onClick={handleShowCSs}>style.css</button>
                <button className='flex-1 bg-yellow-600 text-white py-2 rounded font-mono' onClick={handleShowJs}>script.js</button>
            </div>
            {showHtml && <Html />}
            {showCSs && <Css />}
            {showJs && <Script/>}
            <ActionsBtn/>
        </div>
        {/* output components*/}
        <Output />
    </div>
  )
}

export default Content