import ReactDOM from "react-dom/client";
import { App } from "./components";

const root = document.getElementById("root") as HTMLElement;
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
