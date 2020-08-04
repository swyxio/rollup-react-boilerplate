import React from "react";
import SFC from "./SFC.react";

export default function App() {
  return (
    <main>
      <div class="card">
        <h1>React SFC Demo</h1>
        <SFC />
      </div>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1em",
      }}
    >
      <a href="https://github.com/sw-yx/rollup-react-boilerplate">
        https://github.com/sw-yx/rollup-react-boilerplate
      </a>
    </div>)
}