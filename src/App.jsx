import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import Layout from "./components/layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
