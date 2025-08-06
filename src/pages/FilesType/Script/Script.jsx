import React, { useContext } from 'react'
import { EditorContext } from '../../Context/EditorContext';
import CodeMirror from '@uiw/react-codemirror'; 
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from "@codemirror/autocomplete";
function Script() {
  const {jsCode,setJsCode} = useContext(EditorContext);
  const handelJsChange =(value)=>{
    setJsCode(value);
  }
  return (
    <>
    <div className='flex flex-col'>
        {/* <textarea value={jsCode} onChange={handelJsChange} id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='alert("hello world")'></textarea> */}

        <CodeMirror
        className='h-64 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2'
          value={jsCode}
          extensions={[javascript({ jsx: true }),
            autocompletion(),
            
          ]}
          onChange={handelJsChange}
        />
    </div>
    </>
  )
}

export default Script