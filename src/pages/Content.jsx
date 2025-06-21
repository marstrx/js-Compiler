import React from 'react';
import { useRef } from 'react';
import './Content.css';

function Content() {
    const inputRef = useRef(null);
    const outputRef = useRef(null);

    const handleRunCode=()=>{
        const inputCode = inputRef.current.value;
        const outputFrame = outputRef.current;
        outputFrame.srcdoc = inputCode;
    }
    const handleSaveCode=()=>{
        const inputCode = inputRef.current.value;
        const blob = new Blob([inputCode],{
            type: "text/html"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download ="marstrx.html";
        a.click();
        URL.revokeObjectURL(url);
    }
    const handleClearCode=()=>{
        inputRef.current.value="";
        outputRef.current.srcdoc="";
    }
  return (
    <div className='content'>
        <div className='inputSectionforCode'>
            <div className="label">
                <div><i class="bi bi-code-slash fs-3"></i></div>
                <div><label htmlFor="inputText">Write your code here</label></div>
            </div>
            <textarea ref={inputRef} id="inputText" className='inputText' placeholder='<h1>Hello World</h1>'></textarea>
            <div className='inputSectionforCodeBtns'>
                <button className='btn ' onClick={handleRunCode}><i class="bi bi-play"></i> Run</button>
                <button className='btn' onClick={handleSaveCode}><i class="bi bi-save"></i> Save</button>
                <button className='btn' onClick={handleClearCode}><i class="bi bi-trash"></i> Clear</button>
            </div>
        </div>
        <div className='outputSectionforCode'>
            <div className='outputSectionforCodeLabel'>
                <i class="bi bi-terminal fs-3"></i>
                <label htmlFor="outputText">Output</label>
            </div>
            <iframe ref={outputRef}></iframe>
        </div>
    </div>
  )
}

export default Content