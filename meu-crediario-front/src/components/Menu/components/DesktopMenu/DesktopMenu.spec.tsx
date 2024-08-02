import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { DesktopMenu } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("DesktopMenu", () => {
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
          <DesktopMenu />
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("desktop-menu")).toBeInTheDocument();
  });
});
