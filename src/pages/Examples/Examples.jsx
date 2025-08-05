import React from "react";
import "./Examples.css";

function Examples() {
const examples = [
      {
        title: "Example 1: Clickable Text",
        description: "Clicking 'hello world' shows an alert.",
        html: `<h1 id="hello">hello world</h1>`,
        css: `h1 { background-color: blue; color: white; cursor: pointer; }`,
        js: `document.getElementById("hello").addEventListener("click", () => alert("hello world"));`
      },
      {
        title: "Example 2: Toggle Visibility",
        description: "Click the button to show/hide the paragraph.",
        html: `<button id="btn">Toggle</button><p id="para">Hello there!</p>`,
        css: `#para { display: block; }`,
        js: `document.getElementById("btn").onclick = () => {
          const para = document.getElementById("para");
          para.style.display = para.style.display === "none" ? "block" : "none";
        };`
      },
      {
        title: "Example 3: Mouse Over Effect",
        description: "Hover over the box to change color.",
        html: `<div id="box">Hover me</div>`,
        css: `#box { width: 100px; height: 100px; background: red; color: white; text-align: center; line-height: 100px; }`,
        js: `const box = document.getElementById("box");
        box.onmouseover = () => box.style.background = "green";
        box.onmouseout = () => box.style.background = "red";`
      },
      {
        title: "Example 4: Input Mirror",
        description: "What you type will appear below.",
        html: `<input id="inp" placeholder="Type here" /><p id="mirror"></p>`,
        css: `input, p { font-size: 16px; }`,
        js: `document.getElementById("inp").addEventListener("input", e => {
          document.getElementById("mirror").textContent = e.target.value;
        });`
      },
      {
        title: "Example 5: Counter",
        description: "Click the button to increase the number.",
        html: `<p id="count">0</p><button id="increment">+1</button>`,
        css: `p { font-size: 20px; }`,
        js: `let count = 0;
        document.getElementById("increment").onclick = () => {
          count++;
          document.getElementById("count").textContent = count;
        };`
      }
];


  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Error copying: ", err));
  };

  
 

  return (
    <div className="mr-5.5 ml-5.5 font-mono mb-30 my-30">
      <h3>Examples</h3>
      <p>Here are some examples of how to use the features of this project:</p>

      {examples.map((ex, i) => (
        <div key={i} >
          <h4>{ex.title}</h4>
          <p>{ex.description}</p>

          <p>HTML</p>
          <button className="mb-30 bg-blue-400 px-7 rounded" onClick={() => copyToClipboard(ex.html)}>
            <i className="bi bi-copy"></i> Copy
          </button>
          <pre className="bg-gray-200 rounded p-4 overflow-x-auto mt-3">
            <code>{ex.html}</code>
          </pre>

          <p>CSS</p>
          <button className="bg-blue-400 px-7 rounded" onClick={() => copyToClipboard(ex.css)}>
            <i className="bi bi-copy"></i> Copy
          </button>
          <pre className="bg-gray-200 rounded p-4 overflow-x-auto mt-3">
            <code>{ex.css}</code>
          </pre>

          <p>JavaScript</p>
          <button className="bg-blue-400 px-7 rounded" onClick={() => copyToClipboard(ex.js)}>
            <i className="bi bi-copy"></i> Copy
          </button>
          <pre className="bg-gray-200 rounded p-4 overflow-x-auto mt-3">
            <code>{ex.js}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

export default Examples;
