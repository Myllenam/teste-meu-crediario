import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SideMenu } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("SideMenu", () => {
  const mockOnHide = vi.fn();
  const mockOnShow = vi.fn();
  const setup = (isOpen = true): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
          <SideMenu onHideSideMenu={mockOnHide} onShowSideMenu={mockOnShow} open={isOpen} />
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("side-menu")).toBeInTheDocument();
  });
});
