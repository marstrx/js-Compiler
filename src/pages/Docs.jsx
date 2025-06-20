import React from 'react'
import "./Docs.css";
function Docs() {
  return (
    <div className="docs-container">
    <h3>Documentation</h3>
    <p>Welcome to the documentation page. Here you will find all the information you need to get started with our project.</p>
    <h4>Getting Started</h4>
    <p>To get started, you can follow the steps below:</p>
    <ol className="docs-get-started">
      <li>Clone the repository from GitHub.</li>
      <li>Install the necessary dependencies using npm or yarn install</li>
      <li>Run the development server to see the project in action.</li>
      <li>Explore the codebase and start making changes!</li>
    </ol>
    <h4 className='docs-features'>Features</h4>
    <p>This project includes several features that make it easy to use:</p>
    <ul className='docs-features-list'>
      <li>Responsive design that works on all devices.</li>
      <li>Modular architecture for easy maintenance and scalability.</li>
    </ul>
    <h4 className='docs-contributing'>Contributing</h4>
    <p>If you would like to contribute to this project, please follow these steps:</p>
    <ol className='docs-contributing-list'>
      <li>Fork the repository on GitHub.</li>
      <li>Create a new branch for your feature or bug fix.</li>
      <li>Make your changes and commit them with a clear message.</li>
      <li>Push your changes to your forked repository.</li>
      <li>Submit a pull request to the main repository.</li>
    </ol>
    </div>
      
  )
}

export default Docs