import ReactDOM from "react-dom/client";
import { AppWrapper } from "./components";

const root = document.getElementById("root") as HTMLElement;
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<AppWrapper />);
