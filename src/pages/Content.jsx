import React, { useState } from 'react';
import './Content.css';
import Css from './FilesType/Css/Css';
import Script from './FilesType/Script/Script';
import Html from './FilesType/Html/Html';
import Output from './Output/Output';
import ActionsBtn from './ActionsBtn/ActionsBtn';

function Content() {
    const [showHtml, setShowHtml] = React.useState(true);
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

    // const inputRef = useRef(null);
    // const outputRef = useRef(null);

    // const handleRunCode=()=>{
    //     const inputCode = inputRef.current.value;
    //     const outputFrame = outputRef.current;
    //     outputFrame.srcdoc = inputCode;
    // }
    // const handleSaveCode=()=>{
    //     const inputCode = inputRef.current.value;
    //     const blob = new Blob([inputCode],{
    //         type: "text/html"
    //     });
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.download ="marstrx.html";
    //     a.click();
    //     URL.revokeObjectURL(url);
    // }
    // const handleClearCode=()=>{
    //     inputRef.current.value="";
    //     outputRef.current.srcdoc="";
    // }
  return (
    
    <div className='content'>
        <div className='inputSectionforCode'>
            <div className="label">
                <div><i class="bi bi-code-slash fs-3"></i></div>
                <div><label htmlFor="inputText">Write your code here</label></div>
            </div>
            <div>
                <button onClick={handleShowHtml}>index.html</button>
                <button onClick={handleShowJs}>script.js</button>
                <button onClick={handleShowCSs}>style.css</button>
            </div>
            {showHtml && <Html />}
            {showCSs && <Css />}
            {showJs && <Script />}
            {/* <textarea ref={inputRef} id="inputText" className='inputText' placeholder='<h1>Hello World</h1>'></textarea> */}
            <ActionsBtn/>
        </div>
        {/* output */}
        <Output/>
    </div>
  )
}

export default Content