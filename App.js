import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "hello guys are made"),
      React.createElement("h2", {}, "your are pagal ladki"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "your are pagal bhendi ladki"),
      React.createElement("h2", {}, "your are pagal bhendi ladki"),
    ]),
  ]);
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);