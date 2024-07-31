import { render, screen } from "@testing-library/react";

import { Component } from ".";
import { TestAppThemeProvider } from "src/tests";
import { MemoryRouter } from "react-router-dom";

describe("CommonLayout", () => {
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
        <Component />
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("common-layout")).toBeInTheDocument();
  });
});
