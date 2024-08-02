import { type FC } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "src/routes/Router";

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
