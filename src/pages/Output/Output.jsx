import React from 'react';
function Output() {
  return (
    <>
        <div className=''>
            <div className='flex flex-row gap-3 items-center '>
                <i class="bi bi-terminal fs-3"></i>
                <label className='text-xl font-bold'>Output</label>
            </div>
            <iframe className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2 w-full'></iframe>
        </div>
    </>
  )
}


export default Output ;