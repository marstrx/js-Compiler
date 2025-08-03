import React from 'react'

function Html() {
  return (
    <>
    <div className='flex flex-col'>
        <textarea id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='<h1>Hello World</h1>'></textarea>
    </div>
    </>
  )
}

export default Html