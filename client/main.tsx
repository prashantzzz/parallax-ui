import "./global.css";

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

// Only create root if it doesn't exist (prevents HMR double-creation)
const root =
  (container as any).__reactRoot || createRoot(container);
(container as any).__reactRoot = root;

root.render(<App />);
