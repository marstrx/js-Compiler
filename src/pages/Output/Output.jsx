import React, { useContext } from 'react';
import { EditorContext } from '../Context/EditorContext';

function Output() {
  const {outputSrcDoc} = useContext(EditorContext);
  
  return (
    <>
        <div className='mb-20 md:mb-30'>
            <div className='flex flex-row gap-3 items-center '>
                <i class="bi bi-terminal fs-3"></i>
                <label className='text-xl font-bold'>Output</label>
            </div>
            <iframe className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2 w-full'
            srcDoc={outputSrcDoc}>

            </iframe>
        </div>
    </>
  )
}


export default Output ;