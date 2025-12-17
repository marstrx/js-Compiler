import React from "react";

function Languages() {
  const languages = [
    {
      name: "HTML",
      description:
        "JsCompiler fully supports HTML, allowing you to write structured markup and see instant previews of your web pages directly in the editor.",
      color: "bg-[#E14E1D]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-16 h-16"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#E14E1D" rx="60" />
            <path
              fill="#fff"
              d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "CSS",
      description:
        "JsCompiler fully supports CSS, enabling you to style your HTML elements beautifully and see live updates as you edit your styles.",
      color: "bg-[#0277BD]",
      icon: (
        <svg
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#0277BD" rx="60" />
            <path
              fill="#EBEBEB"
              d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z"
            />
            <path
              fill="#fff"
              d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      description:
        "JsCompiler fully supports JavaScript, allowing you to write interactive scripts that run instantly in the preview panel for a smooth coding experience.",
      color: "bg-[#D4AF37]",
      icon: (
        <svg
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#D4AF37" rx="60" />
            <path
              fill="#fff"
              d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="mb-12 mx-3">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Supported Languages
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        JsCompiler allows you to write and test HTML, CSS, and JavaScript code
        in real time. See instant previews of your web pages and experiment with
        interactive scripts right in your browser.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
        {languages.map((lang, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl ${lang.color}`}
          >
            <div className="mb-4">{lang.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              {lang.name}
            </h2>
            <p className="text-center text-white">{lang.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
