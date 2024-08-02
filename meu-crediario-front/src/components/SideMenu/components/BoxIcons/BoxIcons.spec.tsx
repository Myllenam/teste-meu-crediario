import { render, screen } from "@testing-library/react";

import { BoxIcons } from ".";
import { TestAppThemeProvider } from "src/tests";
import { MemoryRouter } from "react-router-dom";

describe("BoxIcons", () => {
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
          <BoxIcons />
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("side-menu-icons")).toBeInTheDocument();
  });
});
