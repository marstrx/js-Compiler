import React from 'react';
function Output() {
  return (
    <>
        <div className='flex flex-col bg-sky-100 shadow-md rounded-md h-96'>
            <div className='flex flex-row gap-3 items-center '>
                <i class="bi bi-terminal fs-3"></i>
                <label className='text-xl font-bold'>Output</label>
            </div>
            <iframe className='h-100'></iframe>
        </div>
    </>
  )
}


export default Output ;