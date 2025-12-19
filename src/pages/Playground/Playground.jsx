import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function Playground() {
  const [htmlCode, setHtmlCode] = useState(
    `<h1>Hello World</h1>
<button onclick="sayHi()">Click me</button>`
  );

  const [cssCode, setCssCode] = useState(
    `body {
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
}`
  );

  const [jsCode, setJsCode] = useState(
    `function sayHi() {
  alert("Hello from JS!");
}`
  );

  const [activeTab, setActiveTab] = useState("html");
  const [output, setOutput] = useState("");

  const runCode = () => {
    const result = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>${cssCode}</style>
</head>
<body>
  ${htmlCode}
  <script>${jsCode}</script>
</body>
</html>
    `;
    setOutput(result);
  };

  const clearCode = () => {
    setHtmlCode("");
    setCssCode("");
    setJsCode("");
  };

  const getLanguage = () =>
    activeTab === "html" ? "html" : activeTab === "css" ? "css" : "javascript";

  const getValue = () =>
    activeTab === "html" ? htmlCode : activeTab === "css" ? cssCode : jsCode;

  const handleChange = (value) => {
    if (activeTab === "html") setHtmlCode(value || "");
    if (activeTab === "css") setCssCode(value || "");
    if (activeTab === "js") setJsCode(value || "");
  };

  return (
    <div className="min-h-screen bg-white p-1 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
          <div className="flex overflow-auto items-center border-b border-gray-700">
            {["html", "css", "js"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm uppercase tracking-wide transition
                  ${
                    activeTab === tab
                      ? "bg-gray-900 text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}

            <button onClick={runCode} className="mt-2 pr-8 pl-8">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"
                />
              </svg>
            </button>

            <button onClick={clearCode} className="mt-2">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"
                />
              </svg>
            </button>
          </div>

          <Editor
            height="450px"
            language={getLanguage()}
            value={getValue()}
            onChange={handleChange}
            theme="vs-white"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
            }}
          />
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm">
            Preview
          </div>
          <iframe
            title="preview"
            srcDoc={output}
            className="w-full h-87 border-none"
            sandbox="allow-scripts allow-modals"
          />
        </div>
      </div>
    </div>
  );
}

export default Playground;
