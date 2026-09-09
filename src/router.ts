import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login/LoginPage";
import { HomePage } from "./pages/HomePage";
import MainLayout from "./pages/mainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Login },
      { path: "home", Component: HomePage },
      //   {
      //     path: "auth",
      //     Component: AuthLayout,
      //     children: [
      //       { path: "login", Component: Login },
      //       { path: "register", Component: Register },
      //     ],
      //   },
    ],
  },
]);
