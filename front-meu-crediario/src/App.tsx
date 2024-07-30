import { Router } from "./providers/AppRouterProvider";
import { AppThemeProvider } from "./providers/AppThemeProvider";

export const App = () => {
  return (
    <AppThemeProvider>
     <Router/>
    </AppThemeProvider>
  );
};
