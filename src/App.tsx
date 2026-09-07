import ReactDOM from "react-dom/client";

import "./index.css";
import MainLayout from "./pages/mainLayout";

const App = () => <MainLayout />;


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);