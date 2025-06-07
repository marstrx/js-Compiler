import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div>
            <p className="footer-text">
            &copy; {new Date().getFullYear()} JsCompiler. All rights reserved.
            </p>
        </div>
        <div className="social-links">
            <p>Follow me on </p>
            <p><i class="bi bi-github"></i>
            <a href="https://github.com/marstrx"> GitHub</a></p>
            <p><i class="bi bi-twitter-x"></i>
            <a href="https://x.com/marstr__1"> Elon</a></p>
            <p><i class="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/marouanebachar"> LinkedIn</a></p>
        </div>
    </footer>
  )
}

export default Footer