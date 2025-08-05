import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    
    <>
    <footer className='bg-zinc-500 text-white gap-3 block md:flex justify-between p-3 font-mono'>
      <div>
        <p className="flex items-center justify-center ml-5.5">
          &copy; {new Date().getFullYear()} JsCompiler. All rights reserved.
        </p>
      </div>
      <div className='flex gap-4 justify-center '>
        <div>
          <p>Follow me on </p>
        </div>

        <div className='flex gap-6  mr-5.5'>
          <div ><a style={{textDecoration:"none"}} className='text-white' href="https://github.com/marstrx"></a><i class="bi bi-github"></i>
          </div>
          <div><a style={{textDecoration:"none"}} className='text-white' href="https://x.com/marstr__1"></a><i class="bi bi-twitter-x"></i>
          </div>
          <div><a style={{textDecoration:"none"}} className='text-white'  href="https://www.linkedin.com/in/marouanebachar"></a><i class="bi bi-linkedin"></i>
          </div>
        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer