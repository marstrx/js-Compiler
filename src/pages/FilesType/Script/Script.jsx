import React from 'react'

function Script({jsCode,setJsCode}) {
  const handelJsChange =(e)=>{
    setJsCode(e.target.value);
  }
  return (
    <>
    <div className='flex flex-col'>
        <textarea value={jsCode} onChange={handelJsChange} id="inputText" className='h-64 bg-blue-100 mt-3 mb-3 rounded-2 p-2 border-red-50 outline-2' placeholder='alert("hello world")'></textarea>
    </div>
    </>
  )
}

export default Script