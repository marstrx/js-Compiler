if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("/js-Compiler/dev-sw.js?dev-sw", {
    scope: "/js-Compiler/",
    type: "classic",
  });
