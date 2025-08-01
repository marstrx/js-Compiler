import React from 'react';
import "./Output.css"
// import { useRef } from 'react';

function Output() {
  return (
    <>
        <div className='outputSectionforCode'>
            <div className='outputSectionforCodeLabel'>
                <i class="bi bi-terminal fs-3"></i>
                <label htmlFor="outputText">Output</label>
            </div>
            <iframe></iframe>
        </div>
    </>
  )
}


export default Output ;