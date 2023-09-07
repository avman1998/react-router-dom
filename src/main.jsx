import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <Outlet />
  </RouterProvider>
);
