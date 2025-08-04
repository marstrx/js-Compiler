import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className='bg-zinc-500 text-white gap-3 block md:flex justify-between p-3'>
      
            <p className="flex items-center justify-center ml-5.5 font-bold font-mono"> 
            &copy; {new Date().getFullYear()} JsCompiler. All rights reserved.
            </p>
       
            <div className='flex gap-3 items-center justify-center mr-5.5 font-bold font-mono'>
              <p>Follow me on </p>
            <p><i class="bi bi-github"></i>
            <a className='text-white' href="https://github.com/marstrx"> GitHub</a></p>
            <p><i class="bi bi-twitter-x"></i>
            <a className='text-white' href="https://x.com/marstr__1"> Elon</a></p>
            <p><i class="bi bi-linkedin"></i>
            <a className='text-white'  href="https://www.linkedin.com/in/marouanebachar"> LinkedIn</a></p>
            </div>
    </footer>
  )
}

export default Footer