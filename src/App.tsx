// RDD
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Dashboard from "@/pages/Dashboard";
import Error from "@/pages/Error";
import Informasi from "@/pages/Informasi";
import Artikel from "@/pages/Artikel";
import Game from "@/pages/Game";

// layout
import MainLayout from "@/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/informasi",
        element: <Informasi />,
        errorElement: <Error />,
      },
      {
        path: "/artikel",
        element: <Artikel />,
        errorElement: <Error />,
      },
      {
        path: "/mood",
        element: <Game />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
