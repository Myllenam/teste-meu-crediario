import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { TableContent } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("TableContent", () => {
  const onMock = vi.fn();
  const setup = (): void => {
    render(
      <TestAppThemeProvider>
        <TableContent onOpenDialog={onMock} data={[]} />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("data-table-component")).toBeInTheDocument();
  });
});
