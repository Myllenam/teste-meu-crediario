import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Menu } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("Menu", () => {
  const mock = vi.fn();
  const setup = (isDesktop = true): void => {
    render(
      <TestAppThemeProvider>
        <MemoryRouter>
          <Menu isUpSm={isDesktop} onShowSideMenu={mock} />
        </MemoryRouter>
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });

  test("should not render mobile icon when is desktop", () => {
    setup();
    expect(screen.queryByTestId("menu-mobile-icon")).not.toBeInTheDocument();
  });

  test("should render mobile icon when is mobile", () => {
    setup(false);
    expect(screen.getByTestId("menu-mobile-icon")).toBeInTheDocument();
  });

  test("should render desktop menu when is desktop", () => {
    setup();
    expect(screen.getByTestId("desktop-menu")).toBeInTheDocument();
  });

  test("should not render desktop menu when is mobile", () => {
    setup(false);
    expect(screen.queryByTestId("desktop-menu")).not.toBeInTheDocument();
  });
});
