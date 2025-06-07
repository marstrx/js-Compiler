import React from 'react';
import { useRef } from 'react';

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
            <label htmlFor="inputText"><i class="bi bi-code-slash"></i>Type your code here</label>
            <textarea ref={inputRef} id="inputText" className='inputText' placeholder='<h1>Hello World</h1>'></textarea>
            <div className='inputSectionforCodeBtns'>
                <button onClick={handleRunCode}><i class="bi bi-play"></i> Run Code</button>
                <button onClick={handleSaveCode}><i class="bi bi-save"></i> Save Code</button>
                <button onClick={handleClearCode}><i class="bi bi-trash"></i> Clear</button>
            </div>
        </div>
        <div className='outputSectionforCode'>
            <label htmlFor="outputText"><i class="bi bi-terminal"></i>Output</label>
            <iframe ref={outputRef}></iframe>
        </div>
    </div>
  )
}

export default Content