import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Menu } from ".";
import { TestAppThemeProvider } from "src/tests";
import { AppThemeProvider } from "src/providers";



describe("Menu", () => {
  const mock = vi.fn()
  const setup = (): void => {
    render(
      <AppThemeProvider>
        <MemoryRouter>
          <Menu isUpSm={true} onShowSideMenu={mock}/>
        </MemoryRouter>
      </AppThemeProvider>,
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