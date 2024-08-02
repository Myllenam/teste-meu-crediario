import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pagination } from ".";
import { TestAppThemeProvider } from "src/tests";

describe("Pagination", () => {
  let mockOnChange = vi.fn();

  const setup = (page = 1, totalPages = 10): void => {
    mockOnChange = vi.fn();
    render(
      <TestAppThemeProvider>
        <Pagination onChange={mockOnChange} page={page} totalPages={totalPages} />
      </TestAppThemeProvider>,
    );
  };

  test("should render the component", () => {
    setup();
    expect(screen.getByTestId("pagination-component")).toBeInTheDocument();
  });

  test("should call onChange with page 2", async () => {
    setup();
    const user = userEvent.setup();
    const button = screen.getByText(2);
    await user.click(button);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test("should not call onChange when is current page", async () => {
    setup();
    const user = userEvent.setup();
    const button = screen.getByText(1);
    await user.click(button);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test("should show the last page", async () => {
    setup(1, 100);
    expect(screen.getByText(100)).toBeInTheDocument();
  });
});
