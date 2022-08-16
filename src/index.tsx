import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
