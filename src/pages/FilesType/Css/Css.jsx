import React, { useContext } from 'react';
import { EditorContext } from '../../Context/EditorContext';
function Css() {
  const {cssCode,setCssCode} = useContext(EditorContext);
  const handleCssChange=(e)=>{
    setCssCode(e.target.value)
  }
  return (
    <>
    <div className='flex flex-col'>
        <textarea value={cssCode} onChange={handleCssChange} id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='background-color :red;'></textarea>
    </div>
    </>
  )
}

export default Css