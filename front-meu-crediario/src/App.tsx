import { AppThemeProvider } from "./providers/AppThemeProvider";
import { Router } from "./routes/Router";

export const App = () => {
  return (
    <AppThemeProvider>
     <Router/>
    </AppThemeProvider>
  );
};
