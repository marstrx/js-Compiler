import React from 'react'
import "./Docs.css";
function Docs() {
  return (
    <div className="flex flex-col ml-5.5 mr-5.5 my-30 mb-30 font-mono">
    <h3 className="relative after:content-[''] after:block after:w-40 after:h-[3px] after:bg-blue-500 after:absolute after:left-0 after:-bottom-1">Documentation</h3>
    <p>Welcome to the documentation page. Here you will find all the information you need to get started with our project.</p>
    <h4>Getting Started</h4>
    <p>To get started, you can follow the steps below:</p>
    <ol >
      <li>Clone the repository from GitHub.</li>
      <li>Install the necessary dependencies using npm or yarn install</li>
      <li>Run the development server to see the project in action.</li>
      <li>Explore the codebase and start making changes!</li>
    </ol>
    <h4 >Features</h4>
    <p>This project includes several features that make it easy to use:</p>
    <ul >
      <li>Responsive design that works on all devices.</li>
      <li>Modular architecture for easy maintenance and scalability.</li>
    </ul>
    <h4 >Contributing</h4>
    <p>If you would like to contribute to this project, please follow these steps:</p>
    <ol >
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