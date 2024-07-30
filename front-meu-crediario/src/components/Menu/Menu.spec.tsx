import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Menu } from ".";
import { TestAppThemeProvider } from "../../tests/TestAppThemeProvider";


describe("Menu", () => {
  
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
          <Menu isUpSm={} onShowSideMenu={}/>
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("dataId")).toBeInTheDocument();
  });

  test("should render the text", () => {
    setup();
    expect(screen.getByText("mockText")).toBeInTheDocument();
  });
});