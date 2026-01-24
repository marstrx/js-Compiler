import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import toast, { Toaster } from "react-hot-toast";

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
  const [isDark, setIsDark] = useState(false);

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
    clearCodeToast();
  };

  const darkMode = () => {
    setIsDark((prev) => !prev);
  };

  const getLanguage = () => {
    if (activeTab === "html") return [html()];
    if (activeTab === "css") return [css()];
    return [javascript()];
  };

  const getValue = () => {
    if (activeTab === "html") return htmlCode;
    if (activeTab === "css") return cssCode;
    return jsCode;
  };

  const handleChange = (value) => {
    if (activeTab === "html") setHtmlCode(value || "");
    if (activeTab === "css") setCssCode(value || "");
    if (activeTab === "js") setJsCode(value || "");
  };

  const clearCodeToast = () => toast.success("Code deleted successfully");
  console.log(isDark);

  return (
    <div className="min-h-screen bg-white p-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 py-2">
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

            <button onClick={runCode} className="px-3">
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

            <button onClick={clearCode} className="px-3">
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

            <button onClick={darkMode} className="px-3">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 551 634"
              >
                <path
                  fill="#fff"
                  d="M312.297 99v7c0 27-12 40-37 40s-36-13-36-40v-7c0-26 11-39 36-39s37 13 37 39zm74 32l5-6c15-22 33-25 52-11c20 14 23 33 8 55l-6 5c-15 22-33 25-52 10c-20-14-22-31-7-53zm-226-6l4 6c15 22 13 39-6 53c-20 15-39 12-54-10l-4-5c-15-22-13-41 6-55c20-14 39-9 54 11zm115 66c85 0 155 70 155 156c0 85-70 154-155 154c-86 0-155-69-155-154c0-86 69-156 155-156zm-224 44l7 2c26 8 34 23 27 47c-8 24-24 31-49 23l-7-2c-25-8-34-23-27-47c8-24 24-31 49-23zm441 2l7-2c26-8 42-1 49 23s-1 39-27 47l-6 2c-26 8-42 1-49-23c-8-24 1-39 26-47zm-217 196c47 0 86-39 86-86c0-48-39-87-86-87c-48 0-87 39-87 87c0 47 39 86 87 86zm-246-45l7-2c25-8 41-2 49 22c7 24-1 39-27 47l-7 2c-25 8-41 2-49-22c-7-24 2-39 27-47zm486-2l6 2c26 8 34 23 27 47s-23 30-49 22l-7-2c-25-8-34-23-26-47c7-24 23-30 49-22zm-415 139l4-6c15-22 34-24 54-10c19 14 21 31 6 53l-4 6c-15 22-34 24-54 10c-19-14-21-31-6-53zm345-6l6 6c15 22 12 39-8 53c-19 14-37 12-52-10l-5-6c-15-22-13-39 7-53c19-14 37-12 52 10zm-133 67v8c0 27-12 40-37 40s-36-13-36-40v-8c0-27 11-40 36-40s37 13 37 40z"
                />
              </svg>
            </button>
          </div>
          <Toaster />
          <CodeMirror
            value={getValue()}
            height="550px"
            theme={isDark ? vscodeDark : undefined}
            extensions={getLanguage()}
            onChange={handleChange}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
              drawSelection: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              searchKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true,
            }}
          />
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gray-800 text-gray-200 px-4 py-3 text-sm">
            Preview
          </div>
          <iframe
            title="preview"
            srcDoc={output}
            className="w-full h-137.5 border-none"
            sandbox="allow-scripts allow-modals"
          />
        </div>
      </div>
    </div>
  );
}

export default Playground;
