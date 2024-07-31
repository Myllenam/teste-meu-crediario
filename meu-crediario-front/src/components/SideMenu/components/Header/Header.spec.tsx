import { render, screen } from "@testing-library/react";

import { Header } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("Header", () => {
  const setup = (isOpen = true): void => {
    render(
      <TestAppThemeProvider>
        <Header />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("side-menu-header")).toBeInTheDocument();
  });
});
