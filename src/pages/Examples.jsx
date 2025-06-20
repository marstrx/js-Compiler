import React from "react";
import "./Examples.css";

function Examples() {
  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Error copying: ", err));
  };

  const example1Code = `<h1 style="color:green">hello world</h1>`;

  const example2Code = `<button style="background-color:blue;color:white" onclick="this.style.backgroundColor='red'">Click Me</button>`;

  const example3Code = `
<form class="simple-form">
  <input type="text" name="name" placeholder="Your name" />
  <input type="email" name="email" placeholder="Your email" />
  <input type="password" name="password" placeholder="Your password" />
  <button type="submit">Submit</button>
</form>

<style>
.simple-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}
.simple-form input {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
.simple-form button {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.simple-form button:hover {
  background: #0056b3;
}
</style>`;

  return (
    <div className="examples-container">
      <h3>Examples</h3>
      <p>Here are some examples of how to use the features of this project:</p>

      {/* Example 1 */}
      <h4>Example 1:</h4>
      <p>This example demonstrates a simple HTML page with a heading.</p>
      <button
        className="examples-copy-btn"
        onClick={() => copyToClipboard(example1Code)}
      >
        <i className="bi bi-copy"></i> Copy
      </button>
      <pre className="example-code">
        <code>{example1Code}</code>
      </pre>

      {/* Example 2 */}
      <h4>Example 2:</h4>
      <p>This example shows a button that changes color when clicked.</p>
      <button
        className="examples-copy-btn"
        onClick={() => copyToClipboard(example2Code)}
      >
        <i className="bi bi-copy"></i> Copy
      </button>
      <pre className="example-code">
        <code>{example2Code}</code>
      </pre>

      {/* Example 3 */}
      <h4>Example 3:</h4>
      <p>This example demonstrates a simple form with three input fields and CSS.</p>
      <button
        className="examples-copy-btn"
        onClick={() => copyToClipboard(example3Code)}
      >
        <i className="bi bi-copy"></i> Copy
      </button>
      <pre className="example-code">
        <code>{example3Code}</code>
      </pre>
    </div>
  );
}

export default Examples;
