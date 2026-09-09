import ReactDOM from "react-dom/client";

import "./index.css";
import MainLayout from "./pages/mainLayout";
import { RouterProvider } from "react-router/dom";
import { router } from "./router";


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<RouterProvider router={router}/>);