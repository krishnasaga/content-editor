import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { EditorDock } from "./EditorDock";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <EditorDock open />
  </StrictMode>,
  rootElement
);
