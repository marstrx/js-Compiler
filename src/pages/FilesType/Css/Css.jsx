import React, { useContext } from 'react';
import { EditorContext } from '../../Context/EditorContext';
import CodeMirror from '@uiw/react-codemirror'; 
import { css } from '@codemirror/lang-css';
import { autocompletion } from "@codemirror/autocomplete";
function Css() {
  const {cssCode,setCssCode} = useContext(EditorContext);
  const handleCssChange=(value)=>{
    setCssCode(value)
  }
  return (
    <>
    <div className='flex flex-col'>
        {/* <textarea value={cssCode} onChange={handleCssChange} id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='background-color :red;'></textarea> */}


        <CodeMirror
        className='h-64 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2'
          value={cssCode}
          extensions={[css({ jsx: true }),
            autocompletion(),
            
          ]}
          onChange={handleCssChange}
        />
    </div>
    </>
  )
}

export default Css