import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import Layout from "./components/layouts/Layout.jsx";
import Description from "./views/Description.jsx";

const router = createBrowserRouter([
  {
    path: "/PrompterDayFront",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "docs/:id",
        element: <Description />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
