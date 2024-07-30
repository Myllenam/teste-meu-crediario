import { type FC } from "react";

import { AppThemeProvider, Router } from "src/providers";
import "src/assets/fontAwesome.ts";

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  );
};
