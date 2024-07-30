import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => await import("../components/CommonLayout"),
    children: [
      { index: true, element: <Navigate to="/meucrediario/inicio" /> },
      {
        path: "inicio",
        children: [
          {
            index: true,
            lazy: async () => await import("../pages/Home"),
          },
        ],
      },
      {
        path: "clientes",
        children: [
          {
            index: true,
            lazy: async () => await import("../pages/Client"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/inicio" />,
  },
]);


