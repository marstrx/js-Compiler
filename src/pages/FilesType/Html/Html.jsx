import { useContext } from "react";
import { EditorContext } from "../../Context/EditorContext";
import CodeMirror from '@uiw/react-codemirror'; 
import { html } from '@codemirror/lang-html';
import { autocompletion } from "@codemirror/autocomplete";
import { color } from '@uiw/codemirror-extensions-color';


function Html() {
  const {htmlCode,setHtmlCode} = useContext(EditorContext)
  const handleHtmlChange=(value)=>{
    setHtmlCode(value)
  }
  return (
    <>
    <div className='flex flex-col'>
        {/* <textarea onChange={handleHtmlChange} value={htmlCode} id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='<h1>Hello World</h1>'></textarea> */}

        <CodeMirror
        className='h-64 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2'
          value={htmlCode}
          extensions={[html({ jsx: true }),
            autocompletion(),
            color
          ]}
          onChange={handleHtmlChange}
        />
    </div>
    </>
  )
}

export default Html