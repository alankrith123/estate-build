import 'leaflet/dist/leaflet.css';
import HomePage from "./routes/homePage/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        }
      ]
        
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;