import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Run Code Online, Fast & Easy
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
        JsCompiler lets you write and run your code instantly in the browser. No
        setup, no installation just start coding.
      </p>

      <Link
        to="/playground"
        style={{ textDecoration: "none" }}
        className="bg-blue-500 inline-flex items-center mt-7 gap-3 px-8 py-3 text-white rounded-full text-lg
                   transition hover:scale-105"
      >
        Start Now
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="#fff"
            d="M1024 99c-363.757-4.934-714.249 229.17-852.226 565.192c-144.118 330.153-69.236 740.283 182.862 997.771c242.464 260.992 641.95 356.786 976.52 234.67c346.74-118.073 602.724-458.592 616.639-825.09c23.34-360.131-188.536-719.422-512.954-876.293C1307.807 131.856 1165.95 98.797 1024 99zm0 100c359.283-6.249 700.984 251.836 793.747 598.93c97.03 326.908-34.215 705.405-315.907 899.024C1209.227 1912.03 775.3 1896.47 498.977 1660.8c-278.414-221.98-378.073-632.576-235.228-958.182C387.557 401.605 698.338 195.179 1024 199zm354.53 430.836l-210.237 426.18l-261.406-340.014l-237.416 702.162l266.172-342.129l274.562 314.17l168.324-760.37zm-448.397 224.86l248.558 315.126l62.078-138.195l-59.431 239.111l-253.695-298.441l-102.926 159.117l105.416-276.719z"
          />
        </svg>
      </Link>
    </section>
  );
}

export default Start;
